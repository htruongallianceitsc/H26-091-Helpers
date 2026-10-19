import fs from 'node:fs';
import path from 'node:path';
import { readCatalog, ROOT, ensureDir, readIfExists } from './lib/catalog.js';

const items = readCatalog();
const groups = groupByCategory(items);
const categoryNames = {
  string: 'String', number: 'Number & Format', array: 'Array / Collection', object: 'Object',
  date: 'Date / Time', validation: 'Validation', async: 'Async / Function', url: 'URL / HTTP',
  error: 'Error / Result', security: 'Security / ID', browser: 'Browser / DOM', config: 'Config / Logging'
};
const statusIcon = { done: '✅', todo: '⬜', wip: '🟨', builtin: '🧩', 'n/a': '➖' };

for (const [category, group] of groups) {
  const dir = path.join(ROOT, 'docs', category);
  ensureDir(dir);
  const expected = new Set(['index.md', ...group.map(item => `${item.id}.md`)]);
  for (const file of fs.readdirSync(dir)) {
    if (file.endsWith('.md') && !expected.has(file)) fs.rmSync(path.join(dir, file));
  }
  const indexLines = [`# ${categoryNames[category] ?? category}`, '', '| Helper | Mục đích | JS | C# |', '| --- | --- | --- | --- |'];
  for (const item of group) {
    indexLines.push(`| [${item.id}](./${item.id}.md) | ${item.summary.replace(/\|/g, '\\|')} | ${statusIcon[item.status.js]} ${item.status.js} | ${statusIcon[item.status.csharp]} ${item.status.csharp} |`);
    const jsSource = readIfExists(path.join(ROOT, 'packages/js/src', category, `${item.id}.js`));
    const examples = Array.isArray(item.examples) && item.examples.length
      ? item.examples.map(ex => `- Input: \`${JSON.stringify(ex.in)}\` → Output: \`${JSON.stringify(ex.out)}\``).join('\n')
      : '- Chưa khai báo ví dụ trong metadata.';
    const edge = (item.edge_cases ?? []).map(x => `- ${x}`).join('\n') || '- Không có.';
    const notes = Object.entries(item.notes ?? {}).map(([lang,note]) => `- **${lang}:** ${note}`).join('\n');
    const page = [
      `# ${item.id}`, '',
      '> Trang này được sinh tự động. Sửa metadata/source rồi chạy `npm run gen:docs`.', '',
      '## Mô tả', '', item.summary, '',
      '## Signature', '', '```text', item.signature, '```', '',
      '## Ví dụ', '', examples, '',
      '## Edge cases', '', edge, '',
      '## Trạng thái', '',
      `- JavaScript: ${statusIcon[item.status.js]} \`${item.status.js}\``,
      `- C#: ${statusIcon[item.status.csharp]} \`${item.status.csharp}\``, '',
      ...(notes ? ['## Ghi chú theo ngôn ngữ', '', notes, ''] : []),
      '## Code', ''
    ];
    if (jsSource) {
      page.push('::: code-group', '', '```js [JavaScript]', jsSource, '```', '');
      if (item.status.csharp === 'builtin' && item.notes?.csharp) {
        page.push('```text [C#]', item.notes.csharp, '```', '');
      } else {
        page.push('```text [C#]', `Status: ${item.status.csharp}`, '```', '');
      }
      page.push(':::', '');
    } else {
      page.push(`JavaScript: \`${item.status.js}\`.`, '', `C#: \`${item.status.csharp}\`.`, '');
    }
    fs.writeFileSync(path.join(dir, `${item.id}.md`), page.join('\n') + '\n');
  }
  fs.writeFileSync(path.join(dir, 'index.md'), indexLines.join('\n') + '\n');
}

fs.copyFileSync(path.join(ROOT, 'CONVENTIONS.md'), path.join(ROOT, 'docs/conventions.md'));
const checklist = fs.readFileSync(path.join(ROOT, 'CHECKLIST.md'), 'utf8').replace(/\.\/docs\//g, './');
fs.writeFileSync(path.join(ROOT, 'docs/checklist.md'), checklist);
console.log(`Đã sinh docs cho ${items.length} helper.`);

function groupByCategory(items) {
  const groups = new Map();
  for (const item of items) {
    const group = groups.get(item.category);
    if (group) group.push(item);
    else groups.set(item.category, [item]);
  }
  return groups;
}

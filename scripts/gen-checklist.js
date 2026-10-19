import fs from 'node:fs';
import path from 'node:path';
import { readCatalog, ROOT } from './lib/catalog.js';

const icon = { done: '✅', todo: '⬜', wip: '🟨', builtin: '🧩', 'n/a': '➖' };
const categoryNames = {
  string: 'String', number: 'Number & Format', array: 'Array / Collection', object: 'Object',
  date: 'Date / Time', validation: 'Validation', async: 'Async / Function', url: 'URL / HTTP',
  error: 'Error / Result', security: 'Security / ID', browser: 'Browser / DOM', config: 'Config / Logging'
};
const items = readCatalog();
const grouped = groupByCategory(items);
const lines = [
  '# Helpers Checklist', '',
  '> File này được sinh tự động từ `catalog/`. Không sửa tay.', '',
  'Legend: ✅ done · 🟨 wip · ⬜ todo · 🧩 builtin · ➖ n/a', ''
];
for (const [category, group] of grouped) {
  lines.push(`## ${categoryNames[category] ?? category}`, '');
  lines.push('| Helper | Mục đích | Ưu tiên | JS | C# |', '| --- | --- | :---: | :---: | :---: |');
  for (const item of group) {
    lines.push(`| [\`${item.id}\`](./docs/${item.category}/${item.id}.md) | ${item.summary.replace(/\|/g, '\\|')} | ${'⭐'.repeat(item.priority)} | ${icon[item.status.js]} ${item.status.js} | ${icon[item.status.csharp]} ${item.status.csharp} |`);
  }
  lines.push('');
}
fs.writeFileSync(path.join(ROOT, 'CHECKLIST.md'), lines.join('\n') + '\n');
console.log(`Đã sinh CHECKLIST.md từ ${items.length} helper.`);

function groupByCategory(items) {
  const groups = new Map();
  for (const item of items) {
    const group = groups.get(item.category);
    if (group) group.push(item);
    else groups.set(item.category, [item]);
  }
  return groups;
}

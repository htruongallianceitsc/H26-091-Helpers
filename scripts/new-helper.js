import fs from 'node:fs';
import path from 'node:path';
import { ROOT, ensureDir } from './lib/catalog.js';

const args = parseArgs(process.argv.slice(2));
const category = args.category;
const id = args.id;
const summary = args.summary;
const languages = (args.languages ?? 'js').split(',').map(x => x.trim()).filter(Boolean);
if (!category || !id || !summary) fail('Cần --category, --id, --summary');
if (!/^[a-z][A-Za-z0-9]*$/.test(id)) fail('--id phải là camelCase');
if (!/^[a-z][a-z0-9-]*$/.test(category)) fail('--category không hợp lệ');
for (const lang of languages) if (!['js','csharp'].includes(lang)) fail(`Ngôn ngữ chưa hỗ trợ scaffold: ${lang}`);

const metaFile = path.join(ROOT, 'catalog', category, `${id}.yml`);
if (fs.existsSync(metaFile)) fail(`Helper đã tồn tại: ${category}/${id}`);
ensureDir(path.dirname(metaFile));
const jsStatus = languages.includes('js') ? 'wip' : 'todo';
const csStatus = languages.includes('csharp') ? 'wip' : 'todo';
fs.writeFileSync(metaFile, `id: ${id}\ncategory: ${category}\nsummary: ${JSON.stringify(summary)}\nsignature: ${JSON.stringify(`${id}(...args) => unknown`)}\npriority: 2\nexamples: []\nedge_cases: []\nstatus:\n  js: ${jsStatus}\n  csharp: ${csStatus}\ntags: []\n`);

if (languages.includes('js')) {
  const src = path.join(ROOT, 'packages/js/src', category, `${id}.js`);
  const test = path.join(ROOT, 'packages/js/tests', category, `${id}.test.js`);
  ensureDir(path.dirname(src)); ensureDir(path.dirname(test));
  fs.writeFileSync(src, `/**\n * ${summary}\n * @returns {unknown}\n */\nexport function ${id}(...args) {\n  void args;\n  throw new Error('TODO: implement ${id}');\n}\n`);
  fs.writeFileSync(test, `import { describe, it } from 'vitest';\nimport { ${id} } from '../../src/${category}/${id}.js';\n\ndescribe('${id}', () => {\n  it.todo('bổ sung test từ edge_cases trong metadata');\n});\n`);
  const indexFile = path.join(ROOT, 'packages/js/src/index.js');
  fs.appendFileSync(indexFile, `export { ${id} } from './${category}/${id}.js';\n`);
}

if (languages.includes('csharp')) {
  const dir = path.join(ROOT, 'packages/csharp/src/Helpers'); ensureDir(dir);
  const className = `${pascal(category)}Helpers`;
  const file = path.join(dir, `${className}.${pascal(id)}.cs`);
  fs.writeFileSync(file, `using System;\n\nnamespace HelpersHub;\n\npublic static partial class ${className}\n{\n    // TODO: Cập nhật signature theo metadata và triển khai helper.\n    public static object ${pascal(id)}(params object[] args)\n        => throw new NotImplementedException();\n}\n`);
}

console.log(`Đã scaffold ${category}/${id} cho: ${languages.join(', ')}`);
console.log('Tiếp theo: cập nhật signature/examples/edge_cases, code, test rồi chạy npm run generate.');

function parseArgs(values) {
  const out = {};
  for (let i = 0; i < values.length; i++) {
    const key = values[i];
    if (!key.startsWith('--')) continue;
    out[key.slice(2)] = values[i + 1];
    i++;
  }
  return out;
}
function pascal(value) { return value.replace(/(^|[-_])(\w)/g, (_, __, c) => c.toUpperCase()); }
function fail(message) { console.error(message); process.exit(1); }

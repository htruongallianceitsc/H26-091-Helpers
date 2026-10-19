import fs from 'node:fs';
import path from 'node:path';
import { readCatalog, ROOT } from './lib/catalog.js';

const VALID_STATUS = new Set(['done', 'todo', 'wip', 'builtin', 'n/a']);
const LANGS = ['js', 'csharp'];
const errors = [];
const seen = new Set();

for (const item of readCatalog()) {
  const key = `${item.category}/${item.id}`;
  if (seen.has(key)) errors.push(`${item.__file}: trùng helper ${key}`);
  seen.add(key);
  if (!/^[a-z][A-Za-z0-9]*$/.test(item.id ?? '')) errors.push(`${item.__file}: id phải là camelCase`);
  if (!/^[a-z][a-z0-9-]*$/.test(item.category ?? '')) errors.push(`${item.__file}: category không hợp lệ`);
  if (!item.summary) errors.push(`${item.__file}: thiếu summary`);
  if (!item.signature) errors.push(`${item.__file}: thiếu signature`);
  if (![1,2,3].includes(item.priority)) errors.push(`${item.__file}: priority phải là 1, 2 hoặc 3`);
  if (!Array.isArray(item.edge_cases)) errors.push(`${item.__file}: edge_cases phải là array`);
  for (const lang of LANGS) {
    const status = item.status?.[lang];
    if (!VALID_STATUS.has(status)) errors.push(`${item.__file}: status.${lang} không hợp lệ`);
  }

  if (item.status?.js === 'done') {
    const source = path.join(ROOT, 'packages/js/src', item.category, `${item.id}.js`);
    const test = path.join(ROOT, 'packages/js/tests', item.category, `${item.id}.test.js`);
    if (!fs.existsSync(source)) errors.push(`${item.__file}: js=done nhưng thiếu ${path.relative(ROOT, source)}`);
    if (!fs.existsSync(test)) errors.push(`${item.__file}: js=done nhưng thiếu ${path.relative(ROOT, test)}`);
  }
  for (const [lang, status] of Object.entries(item.status ?? {})) {
    if (status === 'builtin' && !item.notes?.[lang]) errors.push(`${item.__file}: ${lang}=builtin phải có notes.${lang}`);
  }
}

if (errors.length) {
  console.error(`Catalog invalid (${errors.length} lỗi):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log(`Catalog hợp lệ: ${seen.size} helper.`);

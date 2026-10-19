import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(HERE, '../..');
export const CATALOG_DIR = path.join(ROOT, 'catalog');

export function readCatalog() {
  const items = [];
  for (const category of fs.readdirSync(CATALOG_DIR, { withFileTypes: true })) {
    if (!category.isDirectory()) continue;
    const dir = path.join(CATALOG_DIR, category.name);
    for (const file of fs.readdirSync(dir).filter(name => name.endsWith('.yml')).sort()) {
      const fullPath = path.join(dir, file);
      const data = parseCatalogYaml(fs.readFileSync(fullPath, 'utf8'));
      items.push({ ...data, __file: path.relative(ROOT, fullPath) });
    }
  }
  return items.sort((a,b) => a.category.localeCompare(b.category) || a.id.localeCompare(b.id));
}

export function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }
export function readIfExists(file) { return fs.existsSync(file) ? fs.readFileSync(file, 'utf8').trim() : null; }

function parseCatalogYaml(text) {
  const result = {};
  const lines = text.split(/\r?\n/);
  let section = null;
  let currentExample = null;

  for (const rawLine of lines) {
    if (!rawLine.trim() || rawLine.trimStart().startsWith('#')) continue;
    const indent = rawLine.match(/^\s*/)[0].length;
    const line = rawLine.trim();

    if (indent === 0) {
      currentExample = null;
      const match = line.match(/^([A-Za-z_][\w-]*):(?:\s*(.*))?$/);
      if (!match) throw new Error(`YAML không hỗ trợ: ${line}`);
      const [, key, rawValue = ''] = match;
      if (rawValue === '') {
        section = key;
        if (['examples', 'edge_cases', 'tags'].includes(key)) result[key] = [];
        else result[key] = {};
      } else {
        section = null;
        result[key] = parseScalar(rawValue);
      }
      continue;
    }

    if (!section) throw new Error(`Dòng thụt lề không có section: ${line}`);

    if (section === 'edge_cases' || section === 'tags') {
      const match = line.match(/^-\s+(.*)$/);
      if (!match) throw new Error(`Danh sách ${section} không hợp lệ: ${line}`);
      result[section].push(parseScalar(match[1]));
      continue;
    }

    if (section === 'examples') {
      let match = line.match(/^-\s+in:\s*(.*)$/);
      if (match) {
        currentExample = { in: parseScalar(match[1]) };
        result.examples.push(currentExample);
        continue;
      }
      match = line.match(/^out:\s*(.*)$/);
      if (match && currentExample) {
        currentExample.out = parseScalar(match[1]);
        continue;
      }
      throw new Error(`examples không hợp lệ: ${line}`);
    }

    const nested = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (!nested) throw new Error(`Mapping ${section} không hợp lệ: ${line}`);
    result[section][nested[1]] = parseScalar(nested[2]);
  }

  return result;
}

function parseScalar(raw) {
  const value = raw.trim();
  if (value === '[]') return [];
  if (value === '{}') return {};
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (value === 'null') return null;
  if (/^-?\d+(?:\.\d+)?$/.test(value)) return Number(value);
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    if (value.startsWith('"')) return JSON.parse(value);
    return value.slice(1, -1).replace(/''/g, "'");
  }
  return value;
}

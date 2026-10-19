import assert from 'node:assert/strict';
import {
  slugify, removeAccents, truncate, isBlank,
  formatCurrency, formatNumber,
  chunk, uniqueBy, groupBy,
  deepClone, deepMerge, pick, omit, removeNullish,
  formatDate, timeAgo,
  isEmail, isPhoneVN,
  sleep, retry, debounce, throttle,
  buildQueryString, parseQueryString,
  uuid, copyToClipboard
} from '../packages/js/src/index.js';

assert.equal(slugify('Xin chào Việt Nam!'), 'xin-chao-viet-nam');
assert.equal(slugify('Đà Nẵng', '_'), 'da_nang');
assert.equal(removeAccents('Đà Nẵng'), 'Da Nang');
assert.equal(truncate('abcdefghij', 7), 'abcd...');
assert.equal(isBlank('  '), true);
assert.equal(isBlank(0), false);
assert.match(formatCurrency(1234567), /1[.]234[.]567/);
assert.equal(formatNumber(1234567), '1.234.567');
assert.deepEqual(chunk([1,2,3,4,5], 2), [[1,2],[3,4],[5]]);
assert.deepEqual(uniqueBy([{id:1},{id:1},{id:2}], x => x.id), [{id:1},{id:2}]);
assert.deepEqual(groupBy([1,2,3,4], x => x % 2).get(0), [2,4]);
const cloned = deepClone({a:{b:1}}); cloned.a.b = 2; assert.equal(cloned.a.b, 2);
assert.deepEqual(deepMerge({a:{x:1}, list:[1]}, {a:{y:2}, list:[2]}), {a:{x:1,y:2},list:[2]});
assert.deepEqual(pick({a:1,b:2}, ['a']), {a:1});
assert.deepEqual(omit({a:1,b:2}, ['a']), {b:2});
assert.deepEqual(removeNullish({a:null,b:0,c:false,d:undefined}), {b:0,c:false});
assert.equal(formatDate('2026-10-19'), '19/10/2026');
assert.equal(timeAgo('2026-10-19T07:57:00Z', '2026-10-19T08:00:00Z'), '3 phút trước');
assert.equal(isEmail('user@example.com'), true);
assert.equal(isPhoneVN('+84901234567'), true);
await sleep(1);
let attempts = 0;
assert.equal(await retry(async () => { attempts++; if (attempts < 2) throw new Error('retry'); return 'ok'; }, {delayMs:0}), 'ok');
let debouncedValue = null;
const d = debounce(v => { debouncedValue = v; }, 2); d('a'); d('b'); await sleep(5); assert.equal(debouncedValue, 'b');
let throttledValues = [];
const t = throttle(v => throttledValues.push(v), 2); t('a'); t('b'); await sleep(5); assert.deepEqual(throttledValues, ['a','b']);
assert.equal(buildQueryString({q:'xin chào',tag:['a','b'],x:null}), 'q=xin+ch%C3%A0o&tag=a&tag=b');
assert.deepEqual(parseQueryString('?tag=a&tag=b'), {tag:['a','b']});
assert.match(uuid(), /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);

const originalNavigator = globalThis.navigator;
try {
  let copied = null;
  Object.defineProperty(globalThis, 'navigator', {value:{clipboard:{writeText: async text => { copied = text; }}}, configurable:true});
  await copyToClipboard('hello');
  assert.equal(copied, 'hello');
} finally {
  Object.defineProperty(globalThis, 'navigator', {value:originalNavigator, configurable:true});
}

console.log('Smoke test pass: 26 JS helpers.');

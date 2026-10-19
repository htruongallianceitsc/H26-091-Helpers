import assert from 'node:assert/strict';
import {rgbToHsv,hsvToRgb,hexToHsv,hsvToHex,alphaBlend,interpolateGradient,analogousColors,triadicColors,tetradicColors,colorTemperatureToRgb,rgbToOklch,oklchToRgb,oklchToHex} from '../packages/js/src/index.js';
assert.deepEqual(rgbToHsv(255,0,0),{h:0,s:100,v:100});
assert.deepEqual(hsvToRgb(120,100,100),{r:0,g:255,b:0});
assert.equal(hexToHsv('#0000ff').h,240);
assert.equal(hsvToHex(0,100,100),'#ff0000');
assert.equal(alphaBlend('#ff000080','#000000'),'#800000');
assert.equal(alphaBlend('#00000000','#00000000'),'#00000000');
assert.deepEqual(interpolateGradient(['#000','#fff'],3),['#000000','#808080','#ffffff']);
assert.equal(analogousColors('#f00').length,3);
assert.deepEqual(triadicColors('#ff0000'),['#ff0000','#00ff00','#0000ff']);
assert.equal(tetradicColors('#f00').length,4);
assert.equal(colorTemperatureToRgb(6500).r,255);
for (const [r,g,b] of [[255,0,0],[0,255,0],[0,0,255],[100,150,200],[0,0,0],[255,255,255]]) {
 const {l,c,h}=rgbToOklch(r,g,b),out=oklchToRgb(l,c,h);
 for (const key of ['r','g','b'])assert.ok(Math.abs(out[key]-({r,g,b})[key])<=1, `${key} roundtrip`);
}
assert.equal(oklchToHex(0,0,0),'#000000');
assert.throws(()=>interpolateGradient(['#f00'],3));
assert.throws(()=>hsvToRgb(0,110,10));
assert.throws(()=>colorTemperatureToRgb(500));
console.log('Color Advanced v1.1.0: PASS');

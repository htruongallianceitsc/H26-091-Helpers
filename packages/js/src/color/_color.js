/** @internal Các phép biến đổi màu đều dùng sRGB; channel 0..255. */
export function byte(value) { if (!Number.isFinite(value) || value < 0 || value > 255) throw new RangeError('Color channel must be between 0 and 255'); return Math.round(value); }
export function alpha(value) { if (!Number.isFinite(value) || value < 0 || value > 1) throw new RangeError('Alpha must be between 0 and 1'); return value; }
export function parseColor(value) {
  if (typeof value !== 'string') throw new TypeError('Color must be a string');
  const s = value.trim();
  const h = /^#([\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/i.exec(s);
  if (h) {
    let x=h[1]; if (x.length <= 4) x=[...x].map(v=>v+v).join('');
    return {r:parseInt(x.slice(0,2),16),g:parseInt(x.slice(2,4),16),b:parseInt(x.slice(4,6),16),a:x.length===8?parseInt(x.slice(6,8),16)/255:1};
  }
  const m=/^rgba?\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)(?:\s*,\s*(0(?:\.\d+)?|1(?:\.0+)?|\.\d+))?\s*\)$/i.exec(s);
  if (m && (s.slice(0,4).toLowerCase()==='rgba') === (m[4]!==undefined)) return {r:byte(+m[1]),g:byte(+m[2]),b:byte(+m[3]),a:m[4]===undefined?1:alpha(+m[4])};
  throw new TypeError('Expected #RGB, #RGBA, #RRGGBB, #RRGGBBAA, rgb() or rgba()');
}
export function toHex({r,g,b,a=1}, includeAlpha=false) { const components=[byte(r),byte(g),byte(b)]; if(includeAlpha)components.push(Math.round(alpha(a)*255)); return '#'+components.map(x=>x.toString(16).padStart(2,'0')).join(''); }
export function rgbToHslRaw({r,g,b}) { r/=255;g/=255;b/=255;const max=Math.max(r,g,b),min=Math.min(r,g,b),delta=max-min;let h=0,s=0;const l=(max+min)/2;if(delta){s=delta/(1-Math.abs(2*l-1));switch(max){case r:h=((g-b)/delta)%6;break;case g:h=(b-r)/delta+2;break;default:h=(r-g)/delta+4;}h=(h*60+360)%360;}return {h,s:s*100,l:l*100}; }
export function hslToRgbRaw(h,s,l){if(![h,s,l].every(Number.isFinite)||s<0||s>100||l<0||l>100)throw new RangeError('Invalid HSL');h=((h%360)+360)%360;s/=100;l/=100;const c=(1-Math.abs(2*l-1))*s,x=c*(1-Math.abs((h/60)%2-1)),m=l-c/2;let v=h<60?[c,x,0]:h<120?[x,c,0]:h<180?[0,c,x]:h<240?[0,x,c]:h<300?[x,0,c]:[c,0,x];return {r:Math.round((v[0]+m)*255),g:Math.round((v[1]+m)*255),b:Math.round((v[2]+m)*255)};}
export function lum({r,g,b}){const [R,G,B]=[r,g,b].map(v=>{const x=v/255;return x<=0.04045?x/12.92:((x+0.055)/1.055)**2.4});return 0.2126*R+0.7152*G+0.0722*B;}
export function opaque(color,background='#ffffff'){const f=parseColor(color);if(f.a===1)return f;const back=parseColor(background);if(back.a!==1)throw new RangeError('Background must be opaque');return {r:f.r*f.a+back.r*(1-f.a),g:f.g*f.a+back.g*(1-f.a),b:f.b*f.a+back.b*(1-f.a),a:1};}

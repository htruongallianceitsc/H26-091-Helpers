/** Sắp xếp ổn định theo một hoặc nhiều khóa, không sửa input. */
export function sortBy(items,selectors,directions=[]) {
 if(!Array.isArray(items))throw new TypeError('items phải là mảng');
 const keys=Array.isArray(selectors)?selectors:[selectors];if(!keys.length||keys.some(fn=>typeof fn!=='function'))throw new TypeError('selectors phải là function');
 const dirs=Array.isArray(directions)?directions:[directions];
 return items.map((value,index)=>({value,index})).sort((a,b)=>{
  for(let i=0;i<keys.length;i++){const x=keys[i](a.value),y=keys[i](b.value);
   const d=x===y?0:x==null?1:y==null?-1:typeof x==='string'&&typeof y==='string'?x.localeCompare(y):x<y?-1:1;
   if(d)return d*(dirs[i]==='desc'?-1:1);
  }return a.index-b.index;
 }).map(x=>x.value);
}

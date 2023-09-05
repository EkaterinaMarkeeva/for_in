export default function sortData(obj, arg) {
  const result = [];
  let keys = Object.keys(obj).sort();
  
  for (let key in arg) {
    result.push({key: arg[key], value: obj[arg[key]]});
    keys = keys.filter(el => el !== arg[key]);
  }
  
  keys.forEach(el => result.push({key: el, value: obj[el]}));
    
  return result;
}

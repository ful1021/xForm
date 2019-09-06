import XField from '../model/XField';

/**
 * 将数据转换为XField数组
 * @param {*} data 
 * @param {*} fn 
 */
export function toFields(data, fn){
  if(!Array.isArray(data)) return [];

  return data.map(f => {
    if(f instanceof XField) return f;
    
    const options = typeof fn == 'function' ? fn(f) : f;
    return new XField(options);
  })
}

const adapter = {toFields};
export default adapter;
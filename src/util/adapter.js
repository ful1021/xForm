import XField from '../model/XField';
import XDesignField from '../model/XDesignField';

/**
 * 将数据转换为XField数组
 * @param {*} data 
 * @param {*} fn 
 */
export function toFields(data, fn){
  if(!Array.isArray(data)) return [];

  return data.map(f => {
    const field = f instanceof XDesignField ? f.toXField() : new XField(f);
    return typeof fn == 'function' ? fn(field, f) : field;
  })
}

/**
 * 将数据转换成XDesignField数组
 * @param {*} data 
 * @param {*} fn 
 */
export function toDesignFields(data, fn){
  if(!Array.isArray(data)) return [];

  return data.map(f => {
    const field = f instanceof XField ? XDesignField.fromXField(f) : new XDesignField(f);
    return typeof fn == 'function' ? fn(field, f) : field;
  })
}

const adapter = {toFields, toDesignFields};
export default adapter;
const OBJECT_TO_STRING_TAG = {
  RegExp: '[object RegExp]'
}

/** 是否为空串或null */
export function isEmptyStr(value){
  return null == value || (typeof value == 'string' && value.length == 0);
}

export function isObject(value){
  return value != null && (typeof value == 'object' || typeof value == 'function')
}

export function isRegExp(value){
  return isObject(value) && Object.prototype.toString.call(value) == OBJECT_TO_STRING_TAG.RegExp;
}

/**
 * 克隆简单对象
 * @param {object} target 
 * @returns 克隆后的对象
 */
export function clonePlainObject(target){
  if(null == target || typeof target != 'object') return target;

  if(Array.isArray(target)){
    return target.map(clonePlainObject);
  }

  let obj = {};
  for(let prop in target){
    let value = target[prop]
    obj[prop] = (null == value || typeof target != 'object') ? value : clonePlainObject(value);
  }

  return obj;
}

/**
 * 根据属性路径查找对应的值
 * @param {object} target - 待查询的目标对象
 * @param {string} path - 待查询属性的路径 `xxx[.xxx]*`
 * @returns 如果有任一值不存在则返回null
 */
export function findProp(target, path){
  if(null == path || '' == path) return null;

  let value = target;
  let props = path.split('.');

  for(let i = 0; i < props.length; i++){
    let prop = props[i];
    if(null == value[prop]) return null;
    value = value[prop];
  }

  return value;
}
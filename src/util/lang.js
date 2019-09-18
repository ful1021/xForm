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

export function cloneDeep(){

}
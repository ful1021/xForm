/** 是否为空串或null */
export function isEmptyStr(value){
  return null == value || (typeof value == 'string' && value.length == 0);
}
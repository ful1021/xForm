/**
 * 生成提示信息
 * @param {XFiled} field - 字段对象
 * @returns {string}
 */
export function genPlaceholder(field){
  if(null == field) return '';

  const prefix = field.required ? field.type == 'select' ? '[必选] ' : '[必填] ' : '';
  const placeholder = field.placeholder || '';
  return `${prefix}${placeholder}` || null;
}

/**
 * 触发一个自定义事件
 * @param {HTMLElement} target - 待触发事件的元素
 * @param {string} name - 事件名 
 * @param {object} detail - 携带的数据 
 * @param {boolean} async - 是否异步触发
 */
export function dispatchEvent(target, name, detail, async = false){
  let event = new CustomEvent(name, {detail, bubbles: true, cancelable: true})
  async ? setTimeout(() => target.dispatchEvent(event), 0) : target.dispatchEvent(event);
}
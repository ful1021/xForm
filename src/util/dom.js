/**
* 判断元素是否不可见
* @param {HTMLElement} el - 待判断的元素
* @param {HTMLElement} container - 容器
* @returns {boolean} 不可见返回true
*/
export function isHidden(el, container){
  return (
    el.offsetTop + el.offsetHeight < container.scrollTop ||
    el.offsetParent < container.scrollTop + container.offsetHeight
  )
}

/**
 * 查找左边点下第一个符合的元素
 * @param {number} x - 坐标点的水平坐标值
 * @param {number} y - 坐标点的垂向坐标值
 * @param {string} selector - 选择器
 * @returns {HTMLElement | null} 
 */
export function findElementFromPoint(x, y, selector){
  const elementsFromPoint = document.elementsFromPoint || document.msElementsFromPoint;
  if(typeof elementsFromPoint !== 'function') return null;

  const result = elementsFromPoint.call(document, x, y);
  if(null == result) return null;

  const elements = Array.isArray(result) ? result : Array.prototype.slice.call(elements);
  
  for(let i = 0; i < elements.length; i++){
    if(elements[i].matches(selector)) return elements[i]
  }

  return null;
}
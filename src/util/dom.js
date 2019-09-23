/**
 * 获取dom元素的outerHTML
 * @param {HTMLElement} el - 元素
 * @param {string} selector - 选择器
 * @returns {string} html字符串
 */
export function getOuterHTML(el, selector = '.xform-template'){
  if(el.matches(selector)) return el.outerHTML;
  
  const dom = el.querySelector(selector);
  return dom == null ? '' : dom.outerHTML;
}

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
 * 检测元素是否和容器不存在交叉部分
 * @param {HTMLElement} el - 待检测元素 
 * @param {HTMLElement} container - 容器
 */
export function isNonIntersect(el, container){
  const elRect = el.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  return (
    elRect.right < containerRect.left || // 元素在容器左侧
    elRect.left > containerRect.right || // 元素在容器右侧
    elRect.top > containerRect.bottom || // 元素在容器下面
    elRect.bottom < containerRect.top    // 元素在容器上面
  );
}

/**
 * 计算当前元素的位置
 * @param {number} direction - 滚动的方向，向上时值大于0，向下时小于0
 * @param {number} distance - 移动的距离
 * @param {HTMLElement} container - 容器
 * @param {HTMLElement} ghost - 拖动的元素
 */
export function computeIndex(direction, distance, container, ghost){
  const doms = Array.from(container.children);
  const rect = container.getBoundingClientRect();

  // 如果是向上移动
  if (direction <= 0) {
    const offsetTop = distance - rect.top + container.scrollTop;

    for (let i = 0; i < doms.length; i++) {
      let dom = doms[i];
      if (dom.offsetTop + (dom.offsetHeight / 2) > offsetTop) {
        return i;
      }
    }
  }
  
  // 如果是向下移动
  if (direction > 0) {
    const offsetTop = distance - rect.top + container.scrollTop + ghost.offsetHeight;

    for (let i = doms.length - 1; i >= 0; i--) {
      let dom = doms[i];
      if (dom.offsetTop + (dom.offsetHeight / 2) < offsetTop) {
        return i
      }
    }
  }
  
  return -1;
}
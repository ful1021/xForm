export default class XField{
  constructor(options){
    this.type = options.type;
    this.name = options.name || `field_${Math.random().toString(16).slice(-8)}`
    this.title = options.title;
    
    this.placeholder = options.placeholder;
    this.defaultValue = options.defaultValue;
    
    this.required = options.required === true;

    // 设计器相关属性
    this.designer = {
      dragging: false,
    }

    Object.defineProperty(this, '_exclude_props', {
      enumerable: false,
      value: ['designer']
    });
  }

  /** 覆写JSON序列化方法 */
  toJSON(){
    const exclude = this._exclude_props || [];
    const props = Object.keys(this).filter(k => exclude.indexOf(k) < 0);
    const json = {};

    for(let i = 0; i < props.length; i++){
      const prop = props[i];
      json[prop] = this[prop]
    }

    return json;
  }
}
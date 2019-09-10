function initOptions(params){
  if(params.type != 'select') return [];
  
  let options = Array.isArray(params.options) ? params.options : []
  if(options.length == 0) options.push('选项1');
  
  return options;
}

export default class XField{
  constructor(params){
    this.type = params.type;
    this.name = params.name || `field_${Math.random().toString(16).slice(-8)}`
    this.title = params.title;
    
    this.placeholder = params.placeholder;
    this.defaultValue = params.defaultValue;
    
    this.required = params.required === true;
    this.options = initOptions(params)

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
import XField from './XField';

export default class XDesignField{
  constructor(options){
    this.type = options.type;
    this.name = options.name;
    this.placeholder = options.placeholder;
    this.notNull = options.notNull === true;
    
    this.dragging = false;
  }

  toXField(){
    return new XField(this)
  }

  static fromXField(options = {}){
    return new XDesignField(options);
  }
}
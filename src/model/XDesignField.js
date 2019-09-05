import XField from './XField';

export default class XDesignField{
  constructor(options){
    this.type = options.type;
    this.name = options.name;
    this.title = options.title;
    this.placeholder = options.placeholder;
    this.defaultValue = options.defaultValue;
    
    this.required = options.required === true;

    this.dragging = false;
  }

  toXField(){
    return new XField(this)
  }

  static fromXField(options = {}){
    return new XDesignField(options);
  }
}
export default class XField{
  constructor(options){
    this.type = options.type;
    this.name = options.name || `field_${Math.random().toString(16).slice(-8)}`
    this.title = options.title;
    this.placeholder = options.placeholder;

    this.required = options.required === true;
  }
}
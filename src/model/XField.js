export default class XField{
  constructor(options){
    this.type = options.type;
    this.name = options.name;
    this.placeholder = options.placeholder;
    
    this.notNull = options.notNull === true;
  }
}
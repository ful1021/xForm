export default class XFormField{
  constructor(options){
    this.type = options.type;
    this.name = options.name;
    
    this.dragging = false;
  }
}
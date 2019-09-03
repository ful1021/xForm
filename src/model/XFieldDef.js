export default class XFormFieldDef{
  constructor(options = {}){
    const ctx = this;

    this.type = options.type;
    this.title = options.title;

    this.maxLength = options.maxLength;
    this.components = options.components;

    this.validator = function(){
      if(typeof options.validator != 'function') return Promise.resolve();
      return options.validator.apply(ctx, arguments)
    };
  }
}


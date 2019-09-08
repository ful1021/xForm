export default class XFormFieldDef{
  constructor(options = {}){
    const ctx = this;

    this.type = options.type;
    this.title = options.title;
    this.icon = options.icon;

    this.maxLength = options.maxLength;

    this.component = options.component || {};
    this.extension = options.extension || {};

    this.validator = function(){
      if(typeof options.validator != 'function') return Promise.resolve();
      return options.validator.apply(ctx, arguments)
    };
  }

  hasRequiredAttrs(){
    return this.type != null;
  }
}


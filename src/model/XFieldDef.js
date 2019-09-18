export default class XFormFieldDef{
  constructor(options = {}){
    this.type = options.type;
    this.title = options.title;
    this.icon = options.icon;

    this.maxLength = options.maxLength;

    this.component = options.component || {};
    this.extension = options.extension || {};

    this.validator = options.validator;
  }

  hasRequiredAttrs(){
    return this.type != null;
  }
}


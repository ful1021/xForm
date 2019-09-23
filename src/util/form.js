export function genPlaceholder(field){
  if(null == field) return '';

  const prefix = field.required ? field.type == 'select' ? '[必选] ' : '[必填] ' : '';
  const placeholder = field.placeholder || '';
  return `${prefix}${placeholder}` || null;
}
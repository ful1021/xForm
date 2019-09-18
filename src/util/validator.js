import store from './store';
import { isRegExp, isEmptyStr } from '../util/lang';


export function validate(field, value, context, external){
  if(null == field || null == field.type) return Promise.resolve();

  const def = store.findFieldDef(field.type);
  if(null == def) return Promise.resolve();

  // 如果有外部传入的自定义验证器
  if(typeof external == 'function') return external(field, value, context, def);
  // 如果没有定义验证器，那么默认验证通过
  if(null == def.validator) return Promise.resolve();

  // 如果是是自定义验证器
  const validator = def.validator;
  if(typeof validator == 'function') return validator(field, value, context, def);
  
  // 如果不是自定义验证器，执行默认方法
  return validateRules(validator, field, value, def);
}

/**
 * 根据指定的规则验证值
 * 
 * @param {*} rules 
 * @param {*} field 
 * @param {*} value 
 */
export function validateRules(rules, field, value, def){
  if(!Array.isArray(rules)) rules = [rules];

  for(let i = 0; i < rules.length; i++){
    const message = validateRule(rules[i], field, value, def);
    if(null != message) return Promise.reject(message);
  }

  return Promise.resolve()
}

/**
 * @param {object}    rule - 规则对象
 * @param {function}  rule.test       [1] 自定义的验证方法，不支持异步 
 * @param {string}    rule.type       [2] 值类型，可选值有[string, number, boolean, array]
 * @param {RegExp}    rule.pattern    [3] 必须满足的正则
 * @param {number}    rule.length     [4] 长度，必须满足指定的长度
 * @param {number}    rule.min        [5] 最小长度
 * @param {number}    rule.max        [5] 最大长度 
 * @param {string}    rule.message    验证的失败的提示信息
 * 
 * @param {*} field 
 * @param {*} value 
 */
export function validateRule(rule, field, value, def){
  // 非必填且为空值时不验证
  if(field.required !== true && isEmptyStr(value)) return null;

  if(typeof rule.test == 'function') return rule.test(value, field, def)

  if(null != rule.type) {
    const typeErr = matchType(rule, value, field);
    if(null !== typeErr) return rule.message || typeErr;
  }

  if(isRegExp(rule.pattern) && !rule.pattern.test(value)){
    return rule.message || '格式有误，请检查'
  }

  const lengthErr = matchLength(rule, value);
  if(null !== lengthErr) return rule.message || lengthErr;

  return null
}

function matchType(rule, value){
  // null, undefined 默认通过任何类型校验
  if(null == value) return null;
  
  if(rule.type != typeof value) {
    return '格式有误，请检查'
  }

  return null;
}

function matchLength(rule, value){
  if(rule.length > 0 && value.length != rule.length){
    return `长度需要为${rule.length}个字符`;
  }

  if(null == value || value.toString().length == 0 || value.length < rule.min || value.length > rule.max){
    return genEmptyTip(rule)
  }
  
  return null;
}

function genEmptyTip(rule){
  if(rule.min > 0 && rule.max > 0 && rule.max > rule.min){
    return `长度在${rule.min}~${rule.max}个字符之间`;
  }

  if(rule.min > 0){
    return `至少${rule.min}个字符`
  }

  if(rule.max > 0){
    return `最多${rule.max}个字符`
  }

  return '不能为空';
}

export default {
  validate,
  validateRule,
  validateRules
}
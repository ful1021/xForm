import {cloneDeep} from 'lodash';

import XFieldDef from '../model/XFieldDef'
import config from '../config';

const state = {
  config: {},    // 配置
  fields: {}     // 字段
}

/** 设置组件配置 */
export function setConfig(o = {}){
  state.config = Object.assign(state.config, cloneDeep(config), cloneDeep(o))
}

/**
 * 根据属性路径查找对应的值
 * @param {*} target -- 待查询的目标对象
 * @param {*} path -- 待查询属性的路径 `xxx[.xxx]*`
 * @returns 如果有任一值不存在则返回null
 */
function findProp(target, path){
  if(null == path || '' == path) return null;

  let value = target;
  let props = path.split('.');
  for(let i = 0; i < props.length; i++){
    let prop = props[i];
    if(null == value[prop]) return null;
    value = value[prop];
  }

  return value;
}

/**
 * 查询多个路径下的属性
 * @param  {...string} paths -- 任一个属性路径
 * @returns 返回第一个不为null的值
 */
export function findConfigProp(...paths){
  for(let i = 0; i < paths.length; i++){
    const path = paths[i];
    const value = findProp(state.config, path);

    if(null != value) return value;
  }

  return null;
}

/** 注册任意个字段 */
export function register(...args){
  if(args.length <= 0) return;

  Array.from(arguments)
    .reduce((acc, val) => (Array.isArray(val) ? acc = acc.concat(val) : acc.push(val)) && acc, [])
    .filter(f => f instanceof XFieldDef)
    .forEach(def => {
      state.fields[def.type] = def;
    });
}

/** 
 * 查询某字段的字段配置
 * @param {string} type -- 字段类型
 * @returns {XFieldDef} 字段类型配置
 */
export function findFieldDef(type){
  return state.fields[type]
}

function findModeTypes(mode){  
  return findProp(state.config, `modes.${mode}`)
}

/** 获取某字段的验证器 */
export function findFieldValidator(type){
  const def = state.fields[type] || {};
  return def.validator;
}

/** 查询某mode下所有字段的配置 */
export function findFieldDefs(mode){
  let types = findModeTypes(mode);
  let all = Object.keys(state.fields);

  if(Array.isArray(types)){
    all = all.filter(i => types.includes(i))
  }

  return all.map(t => state.fields[t]);
}

const Store = {
  register,
  setConfig,
  findConfigProp,
  findFieldDef,
  findFieldDefs,
  findFieldValidator
};

export default Store;

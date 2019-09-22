import {clonePlainObject, findProp} from '@src/util/lang';

import XFieldType from '../model/XFieldType'
import config from '../config';

const state = {
  config: {},     // 全局配置
  types: {}       // 字段类型
}

/** 设置组件配置 */
export function setConfig(o = {}){
  state.config = Object.assign(state.config, clonePlainObject(config), clonePlainObject(o))
}

/**
 * 查询多个路径下第一个不为null或undefined的属性
 * @param  {...string} paths - 任一个属性路径
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
    .map(o => new XFieldType(o))
    .filter(f => f.available)
    .forEach(ft => {
      state.types[ft.type] = ft;
    });
}

/** 
 * 查询某字段的字段结构
 * @param {string} type -- 字段类型
 * @returns {XFieldType} 字段类型配置
 */
export function findFieldType(type){
  return state.types[type]
}

/** 查询某mode下所有字段的配置 */
export function findModeTypes(mode){  
  let types = findProp(state.config, `modes.${mode}`)
  let all = Object.keys(state.types);

  if(Array.isArray(types)){
    all = all.filter(i => types.includes(i))
  }

  return all.map(t => state.types[t]);
}

const Store = {
  register,
  setConfig,
  findConfigProp,
  findFieldType,
  findModeTypes
};

export default Store;

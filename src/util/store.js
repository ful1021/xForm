import {cloneDeep} from 'lodash';

import XFieldDef from '../model/XFieldDef'
import config from '../config';

const state = {
  config: {
    modes: {
      all: []
    }
  },
  fields: {}   // 字段
}

/** 设置组件配置 */
function setConfig(o = {}){
  state.config = Object.assign(state.config, cloneDeep(config), cloneDeep(o))
}

/** 注册字段 */
function register(...args){
  if(args.length <= 0) return;

  Array.from(arguments)
    .reduce((acc, val) => (Array.isArray(val) ? acc = acc.concat(val) : acc.push(val)) && acc, [])
    .filter(f => f instanceof XFieldDef)
    .forEach(def => state.fields[def.type] = def);
}

/** 查询某字段的字段配置 */
function findFieldDef(type){
  return state.fields[type]
}

function findModeTypes(mode){  
  const modes = state.config.modes || {};
  const types = modes[mode];
  return Array.isArray(types) ? types : [];
}

/** 查询某mode下所有字段的配置 */
function findFieldDefs(mode){
  let types = findModeTypes(mode);
  let all = Object.keys(state.fields);

  if(types.length > 0){
    all = all.filter(i => types.includes(i))
  }

  return all.map(t => state.fields[t]);
}

const Store = {
  register,
  setConfig,
  findFieldDef,
  findFieldDefs
};

export default Store;

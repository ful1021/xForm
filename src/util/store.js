import {cloneDeep} from 'lodash';

import XFieldDef from '../model/XFieldDef'
import config from '../config';

const state = {
  config: {
    modes: {
      all: []
    }
  },
  fields: {},   // 字段
  components: {
    preview: {},  // 预览组件
    setting: {},  // 设置组件
    build: {},    // 表单组件
    view: {}      // 展示组件
  }
}

/** 设置组件配置 */
function setConfig(o = {}){
  state.config = Object.assign(state.config, cloneDeep(config), cloneDeep(o))
}

/** 注册字段 */
function register(...args){
  if(args.length <= 0) return;
  const arr = Array.from(arguments)
    .reduce((acc, val) => (Array.isArray(val) ? acc = acc.concat(val) : acc.push(val)) && acc, [])
    .filter(f => f instanceof XFieldDef);

  for(let fc of arr){
    const preview = fc.components.preview;
    const setting = fc.components.setting;
  
    state.components.preview[preview.name] = preview;
    state.components.setting[setting.name] = setting;
    state.fields[fc.type] = fc;
  }
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

/**
 * 查询注册的组件
 * @param {string} type - 组件的类型
 * @returns {object} 组件对象 
 */
function findComponents(type){
  return state.components[type] || {};
}

const Store = {
  register,
  setConfig,
  findFieldDef,
  findFieldDefs,
  findComponents
};

export default Store;

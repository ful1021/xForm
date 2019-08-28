import XFieldDef from '../model/XFieldDef'

const data = {
  fields: {},   // 字段
  components: {
    preview: {},  // 预览组件
    setting: {},  // 设置组件
    build: {},    // 表单组件
    view: {}      // 展示组件
  }
}

function register(...args){
  if(args.length <= 0) return;
  const arr = Array.from(arguments)
    .reduce((acc, val) => (Array.isArray(val) ? acc = acc.concat(val) : acc.push(val)) && acc, [])
    .filter(f => f instanceof XFieldDef);

  for(let fc of arr){
    const preview = fc.components.preview;
    const setting = fc.components.setting;
  
    data.components.preview[preview.name] = preview;
    data.components.setting[setting.name] = setting;
    data.fields[fc.type] = fc;
  }
}

function findFieldDef(type){
  return data.fields[type]
}

function findFieldDefs(mode){
  const types = Object.keys(data.fields);
  return types.map(t => data.fields[t]);
}

function findComponents(type){
  return data.components[type] || {};
}

const Store = {
  register,
  findFieldDef,
  findFieldDefs,
  findComponents
};

export default Store;

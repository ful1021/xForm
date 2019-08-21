const data = {
  fields: {},   // 字段
  components: {
    preview: {},  // 预览组件
    setting: {},  // 设置组件
    build: {},    // 表单组件
    view: {}      // 展示组件
  }
}

function register(){
  if(arguments.length <= 0) return;
  const args = Array.from(arguments).reduce((acc, val) => (Array.isArray(val) ? acc = acc.concat(val) : acc.push(val)) && acc, []);

  for(let fc of args){
    const preview = fc.components.preview;
    const setting = fc.components.setting;
  
    data.components.preview[preview.name] = preview;
    data.components.setting[setting.name] = setting;
    data.fields[fc.type] = fc;
  }
}

function findField(type){
  return data.fields[type]
}

function findFields(mode){
  const types = Object.keys(data.fields);
  return types.map(t => data.fields[t]);
}

function findComponents(type){
  return data.components[type] || {};
}

const Store = {
  register,
  findField,
  findFields,
  findComponents
};

export default Store;

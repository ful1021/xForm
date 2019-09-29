function createLabel(){
  return {
    // left, right, top,
    position: 'left', 
    width: null
  }
}

export default {
  modes: {},
  label: createLabel(),
  designer: {
    label: createLabel()
  },
  builder: {
    label: createLabel()
  },
  viewer: {
    label: createLabel()
  },
  formatter(field, model){
    return model[field.name]
  }
};
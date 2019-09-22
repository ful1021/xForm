import {clonePlainObject} from '@src/util/lang';

const label = {
  // left, right, top,
  position: 'left', 
  width: null
}

const builder = {
  // 自定义xform-builder的class
  className: null,
  label: clonePlainObject(label)
}

const config = {
  modes: {},
  label,
  formatter(field, model){
    return model[field.name]
  },

  designer: {},
  builder,
  viewer: {}
};

export default config;
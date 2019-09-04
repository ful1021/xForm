import {cloneDeep} from 'lodash';

const label = {
  // left, right, top,
  position: 'left', 
  width: null
}

const builder = {
  // 自定义x-form-builder的class
  className: null,
  label: cloneDeep(label)
}

const config = {
  modes: {
    all: []
  },
  label,
  builder
};

export default config;
export default [
  {
    type: 'select',
    name: 'field_8e78d692',
    title: '型号',
    placeholder: '请先选择电脑型号',
    required: true,
    options: [
      {
        value: 'ThinkPad T480'
      },
      {
        value: 'ThinkPad T490'
      },
      {
        value: 'ThinkPad E590'
      },
      {
        value: 'ThinkPad X1'
      },
      {
        value: 'ThinkPad S3'
      },
      {
        value: '拯救者 Y9000K'
      },
      {
        value: '拯救者 Y7000'
      },
      {
        value: '小新 潮7000'
      },
      {
        value: '小新 14'
      }
    ],
    attributes: {
      multiple: false
    }
  },
  {
    type: 'text',
    name: 'field_da1a81',
    title: '序列号',
    placeholder: 'IMEI/MEID/SN',
    required: true,
    options: [],
    attributes: {}
  },
  {
    type: 'textarea',
    name: 'field_ee39cd',
    title: '故障描述',
    placeholder: '详细描述问题',
    defaultValue: '111',
    required: true,
    options: [],
    attributes: {}
  },
  {
    type: 'date',
    name: 'field_0330d113',
    title: '预约时间',
    placeholder: '服务人员会在预约时间上门处理',
    required: true,
    options: [],
    attributes: {
      type: 'datetime'
    }
  },
  {
    type: 'radio',
    name: 'field_33a15176',
    title: '保修状态',
    required: true,
    options: [
      {
        value: '保修期内'
      },
      {
        value: '人为损坏'
      },
      {
        value: '保修期外'
      }
    ],
    attributes: {
      style: 'inline',
      layout: 'inline'
    }
  },
  {
    type: 'checkbox',
    name: 'field_bf36e50c',
    title: '故障类型',
    placeholder: 'dsdf',
    required: false,
    options: [
      {
        value: '无法开机'
      },
      {
        value: '蓝屏'
      },
      {
        value: '卡顿'
      },
      {
        value: '死机'
      },
      {
        value: '其他'
      }
    ],
    attributes: {
      layout: 'inline'
    }
  },
  {
    type: 'textarea',
    name: 'field_fec79373',
    title: '备注',
    placeholder: '如有其他需求，请在此填写',
    required: false,
    options: [],
    attributes: {}
  }
];

import {closest} from '../util/component';

const XFORM_ITEM_INSTANCE = '__xform_directive_xform_item_instance__';
const XFORM_VALIDATE_KEY = '__xform_directive_validate_key__';

export default {
  bind(el, binding, vnode){
    const context = vnode.context;
    const instance = vnode.componentInstance;
    const xFormItem = closest(instance, 'xform-item');

    const value = typeof binding.value == 'object' ? binding.value : {key: binding.value}
    const key = value.key || context.field && context.field.name;
    if(null == xFormItem || null == key) return;

    xFormItem.$emit('xform.builder.field.add', {key, context})
    // 监听value变化，触发验证
    context.$watch('value', () => xFormItem.$emit('xform.builder.validate'), {deep: true});
    context[XFORM_VALIDATE_KEY] = key;
    context[XFORM_ITEM_INSTANCE] = xFormItem;
  },
  unbind(el, binding, vnode){
    const context = vnode.context;    
    const key = context[XFORM_VALIDATE_KEY];
    const xFormItem = context[XFORM_ITEM_INSTANCE];
    if(null == key || null == xFormItem) return;

    xFormItem.$emit('xform.builder.field.remove', {key});
  }
}
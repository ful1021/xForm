import XFormTip from '../assets/img/xform-tip.png'

import NonReactive from '../mixin/non-reactive';
import Store from '../util/store';
import XField from '../model/XField';

import * as dom from '../util/dom';

const XFormDesigner = {
  name: 'xform-designer',
  mixins:[NonReactive],
  props: {
    value: {
      type: Array,
      default(){
        return []
      }
    },
    mode: {
      type: String,
      default: null
    }
  },
  static(){
    return {
      container: null,
      ghost: null,
      dragEvent: {
        // 拖拽模式 sort, insert
        mode: 'sort',
        // 拖拽的dom元素
        target: null,
        // 移动的方向: 1 -- 向下   -1 -- 向上
        direction: 0, 
        // 是否初始化
        init: false,
        // 鼠标距元素的左侧的距离
        offsetLeft: 0,
        // 鼠标距元素的上侧的距离
        offsetTop: 0,
        // 上一个点的clintY
        prevClientY: 0,
        // 传入的数据
        data: null,
        // 是否已经插入字段
        inserted: null
      }
    }
  },
  data(){
    const fields = Store.findFieldDefs(this.mode);
    
    return {
      fields,
      selectedField: null
    };
  },
  computed: {
    /** 字段是否为空 */
    isEmpty(){
      return !Array.isArray(this.value) || this.value.length == 0;
    }
  },
  methods: {
    /** 删除字段 */
    remove(event, field){
      if(!confirm('该字段删除后不可恢复，是否继续？')) return;
      const index = this.value.findIndex(f => f == field);

      if(index >= 0){
        this.value.splice(index, 1);
        this.$emit('input', this.value);
      }
    },
    /** 快速插入字段 */
    quickInsert(event, options){
      const field = new XField(options);
      const value = this.value.concat(field);
      
      this.selectedField = field;
      this.$emit('input', value)
    },
    /** 拖拽插入字段 */
    insert(distance){
      const dragEvent = this.$static.dragEvent;
      const ghost = this.$static.ghost;
      const index = dom.computeIndex(dragEvent.direction, distance, this.$refs.list, ghost)
      const field = new XField(dragEvent.data);

      this.value.splice(index, 0, field);
      this.$emit('input', this.value);
      this.selectedField = field;

      dragEvent.mode = 'sort';
      dragEvent.inserted = field;
    },
    /** 拖拽排序 */
    sort(distance){
      const dragEvent = this.$static.dragEvent;
      const ghost = this.$static.ghost;
     
      const a = this.value.findIndex(v => v == this.selectedField);
      const b = dom.computeIndex(dragEvent.direction, distance, this.$refs.list, ghost, a)
      const max = this.value.length;
      if(a < 0 || b < 0 || a > max || b > max || a == b) return;

      let arr = this.value;
      arr[a] = arr.splice(b, 1, arr[a])[0];
      this.$emit('input', arr);
    },
    dragstart(event, data, mode){
      // 屏蔽非鼠标左键的点击事件
      if(event.button !== 0) return;
    
      const dragEvent = this.$static.dragEvent;
      const target = event.target.closest('.xform-draggable');
      const rect = target.getBoundingClientRect();

      dragEvent.mode = mode;
      dragEvent.target = target;
      dragEvent.offsetLeft = event.clientX - rect.left;
      dragEvent.offsetTop = event.clientY - rect.top;
      dragEvent.data = data;

      if(data instanceof XField) this.selectedField = data;

      // 监听鼠标移动事件
      document.addEventListener('mousemove', this.dragging);
      document.addEventListener('mouseup', this.dragend);
    },
    dragging(event){
      const dragEvent = this.$static.dragEvent;
      const ghost = this.$static.ghost;
      const container = this.$refs.list;

      if(!dragEvent.init){
        ghost.style.display = 'block';
        ghost.querySelector('.xform-designer-template').innerHTML = dom.getOuterHTML(dragEvent.target)
        ghost.style.width = `${dragEvent.target.offsetWidth}px`;

        dragEvent.init = true;
        if(dragEvent.data instanceof XField){
          dragEvent.data.designer.dragging = true;
        }
      }

      const left = event.clientX - dragEvent.offsetLeft;
      const top = event.clientY - dragEvent.offsetTop;

      ghost.style.transform = `translate(${left}px, ${top}px)`;
      dragEvent.direction = event.clientY - dragEvent.prevClientY >= 0 ? 1 : -1;
      dragEvent.prevClientY = event.clientY;

      // 如果在容器外
      if(dom.isNonIntersect(ghost, container)) {
        // 如果是正在插入的字段，则删除它
        if(dragEvent.inserted){
          const index = this.value.findIndex(v => v == dragEvent.inserted);
          this.value.splice(index, 1);
          this.$emit('input', this.value);

          dragEvent.mode = 'insert';
          dragEvent.inserted = null;
        }
        return;
      }

      if(dragEvent.mode == 'sort') return this.sort(top);
      if(dragEvent.mode == 'insert') return this.insert(top);
    },
    dragend(event){
      this.$static.ghost.style.display = 'none';

      const dragEvent = this.$static.dragEvent;
      dragEvent.init = false;
      dragEvent.inserted = null;

      if(dragEvent.data instanceof XField){
        dragEvent.data.designer.dragging = false;
      }

      // 清空鼠标事件
      document.removeEventListener('mousemove', this.dragging);
      document.removeEventListener('mouseup', this.dragend);
    },
    
    renderField(field){
      return (
        <div 
          class="xform-designer-field xform-draggable" 
          onMousedown={e => this.dragstart(e, field, 'insert')} 
          onClick={e => this.quickInsert(e, field)}
        >
          <div class="xform-designer-field-content xform-template">
            <i class={field.icon}></i>
            <span>{field.title}</span>
          </div>
        </div>
      )
    },
    renderFieldPreview(field){
      const preview = this.createComponent('preview', field, {props: {field}})
      const className = {
        'xform-designer-preview': true,
        'xform-draggable': true,
        'xform-is-selected': this.selectedField == field,
        'xform-is-dragging': field.designer.dragging
      }

      return (
        <div class={className}>
          <xform-item class="xform-template" field={field} validation={false}>{preview}</xform-item>
          <button type="button" class="xform-designer-delete" onClick={e => this.remove(e, field)}>
            <i class="iconfont icon-xform-remove"></i>
          </button>
          <div class="xform-designer-cover" onMousedown={e => this.dragstart(e, field, 'sort')}></div>
        </div>
      )
    },
    /** 渲染预览组件 */
    renderPreview(){
      const content = (
        this.isEmpty 
          ? (
            <div class="xform-designer-preview-tip">
              <img src={XFormTip}/>
              <p>请将左侧控件拖动到此处</p>
            </div>
          )
          : this.value.map(this.renderFieldPreview)
      );

      return (
        <div class="xform-designer-list" ref="list">
          {content}
        </div>
      )
    },
    /** 渲染设置组件 */
    renderSetting(){
      if(null == this.selectedField) return null;

      const field = this.selectedField;
      const props = {field}
      const on = {
        update: event => {
          const {prop, value} = event;
          field[prop] = value;

          this.$emit('input', this.value);
        }
      }

      return this.createComponent('setting', field, {props, on});
    },
    /**
     * 根据字段对象创建对应的组件
     * 
     * 组件按以下顺序匹配，如有任一情况匹配，则创建对应组件：
     * 2. 检索是否有名为`type_${field.type}_${target}`的作用域插槽
     * 3. 检索是否有名为`${mode}_${target}`的扩展组件
     * 4. 检索默认的`${target}`组件
     * 
     * @param {string} target -- 目标组件
     * @param {XField} field -- 字段
     * @param {object} attrs -- 组件属性
     * @returns 组件 
     */
    createComponent(target, field, attrs){
      const typedSlot = `type_${field.type}_${target}`;
      if(this.$scopedSlots[typedSlot]){
        return this.$scopedSlots[typedSlot]({field});
      }

      const fieldDef = Store.findFieldDef(field.type);
      if(fieldDef == null){
        console.warn(`[xform]: ${field.title}(${field.type}) not implement`)
        return null;
      }

      const component = fieldDef.extension[`${this.mode}_${target}`] || fieldDef.component[target];
      return this.$createElement(component, attrs);
    }
  },
  render(){
    return (
      <div class="xform-designer">
        <div class="xform-designer-field-panel">
          <div class="xform-designer-fields">
            {this.fields.map(this.renderField)}
          </div>     
        </div>
        <div class="xform-designer-main">
          {this.renderPreview()}
        </div>
        <div class={['xform-designer-setting', null == this.selectedField ? null : 'xform-is-active']}>
          {this.renderSetting()}
        </div>
        <div class="xform-designer-ghost" key="xform-designer-ghost">
          <div class="xform-designer-template"></div>
          <div class="xform-designer-cover"></div>
        </div>
      </div>
    )
  },
  mounted(){
    this.$static.ghost = this.$el.querySelector('.xform-designer-ghost');
  }
}

export default XFormDesigner;
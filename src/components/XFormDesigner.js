import XFormTip from '../assets/img/x-form-tip.png'

import NonReactive from '../mixins/non-reactive';
import FieldStore from '../util/store';
import XFormField from '../model/XFormField';

import * as dom from '../util/dom';

const XFormDesigner = {
  name: 'x-form-designer',
  mixins:[NonReactive],
  props: {
    value: {
      type: Array,
      default(){
        return []
      }
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
    const fields = FieldStore.findFields('all', this.$xform);
    
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
      const field = new XFormField(options);
      const value = this.value.concat(field);
      
      this.selectedField = field;
      this.$emit('input', value)
    },
    /** 拖拽插入字段 */
    insert(distance){
      const dragEvent = this.$static.dragEvent;
      const ghost = this.$static.ghost;
      const index = dom.computeIndex(dragEvent.direction, distance, this.$refs.list, ghost)
      
      const field = new XFormField(dragEvent.data);
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
      const target = event.target.closest('.x-form-draggable');
      const rect = target.getBoundingClientRect();

      dragEvent.mode = mode;
      dragEvent.target = target;
      dragEvent.offsetLeft = event.clientX - rect.left;
      dragEvent.offsetTop = event.clientY - rect.top;
      dragEvent.data = data;

      if(data instanceof XFormField) this.selectedField = data;

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
        ghost.querySelector('.x-form-designer-template').innerHTML = dom.getOuterHTML(dragEvent.target)
        ghost.style.width = `${dragEvent.target.offsetWidth}px`;

        dragEvent.init = true;
        if(dragEvent.data instanceof XFormField){
          dragEvent.data.dragging = true;
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

      if(dragEvent.data instanceof XFormField){
        dragEvent.data.dragging = false;
      }

      // 清空鼠标事件
      document.removeEventListener('mousemove', this.dragging);
      document.removeEventListener('mouseup', this.dragend);
    },
    renderField(field){
      return (
        <div class="x-form-field x-form-draggable" onMousedown={e => this.dragstart(e, field, 'insert')} onClick={e => this.quickInsert(e, field)}>
          <div class="x-form-field-content x-form-template">
            <i class="iconfont icon-xform-text"></i>
            <span>{field.name}</span>
          </div>
        </div>
      )
    },
    renderFieldPreview(field){
      const formField = FieldStore.findField(field.type);
      if(formField == null){
        console.warn(`[not implement]: ${formField.name}: ${formField.type}. `)
        return null;
      }

      const preview = this.$createElement(formField.components.preview, {
        'class': ['x-form-template'],
        props: {field}
      })

      const className = {
        'x-form-field-preview': true,
        'x-form-draggable': true,
        'x-form-is-selected': this.selectedField == field,
        'x-form-is-dragging': field.dragging
      }

      return (
        <div class={className}>
          {preview}
          <button type="button" class="x-form-designer-delete" onClick={e => this.remove(e, field)}>
            <i class="iconfont icon-xform-close"></i>
          </button>
          <div class="x-form-designer-cover" onMousedown={e => this.dragstart(e, field, 'sort')}></div>
        </div>
      )
    },
    /** 渲染预览组件 */
    renderPreview(){
      const content = (
        this.isEmpty 
          ? (
            <div class="x-form-preview-tip">
              <img src={XFormTip}/>
              <p>请将左侧控件拖动到此处</p>
            </div>
          )
          : this.value.map(this.renderFieldPreview)
      );

      return (
        <div class="x-form-designer-list" ref="list">
          {content}
        </div>
      )
    },
    /** 渲染设置组件 */
    renderSetting(){
      if(null == this.selectedField) return null;

      const formField = FieldStore.findField(this.selectedField.type);
      const field = this.selectedField;
      return this.$createElement(formField.components.setting, {props: {field}, on: {input: e => {
        field.name = e
      }}});
    }
  },
  render(h){
    return (
      <div class="x-form-designer">
        <div class="x-form-designer-fields">
          {this.fields.map(this.renderField)}
        </div>
        <div class="x-form-designer-main">
          {this.renderPreview()}
        </div>
        <div class={['x-form-designer-setting', null == this.selectedField ? null : 'x-form-is-active']}>
          {this.renderSetting()}
        </div>
        <div class="x-form-designer-ghost" key="x-form-designer-ghost">
          <div class="x-form-designer-template"></div>
          <div class="x-form-designer-cover"></div>
        </div>
      </div>
    )
  },
  mounted(){
    this.$static.ghost = this.$el.querySelector('.x-form-designer-ghost');
  },
  components: {
    ...FieldStore.findComponents('preview'),
    ...FieldStore.findComponents('setting')
  }
}

export default XFormDesigner;
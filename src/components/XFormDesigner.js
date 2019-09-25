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
      dragEvent: null
    }
  },
  data(){    
    return {
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
        this.selectedField = null;
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
    insert(index){
      const dragEvent = this.$static.dragEvent;
      const field = new XField(dragEvent.fieldType);

      this.value.splice(index, 0, field);
      this.$emit('input', this.value);
      this.selectedField = field;

      dragEvent.mode = 'sort';
      dragEvent.inserted = field;
    },
    /** 
     * 拖拽排序
     * @param {number} a - 原位置
     * @param {number} b - 新位置
     */
    sort(a, b){
      if(a < 0 || b < 0 || a == b) return;

      let arr = this.value;

      const item = arr.splice(a, 1)[0];
      arr.splice(b > a ? b - 1 : b, 0, item);

      this.$emit('input', arr);
    },
    dragstart(event, field, fieldType, mode){
      // 屏蔽非鼠标左键的点击事件
      if(event.button !== 0) return;
      if(field != null) this.selectedField = field;

      this.$static.dragEvent = this.createDragEvent(event, field, fieldType, mode);
      if(mode == 'sort') this.$refs.list.insertBefore(this.$refs.line, this.$static.dragEvent.target);

      // 监听鼠标移动事件
      document.addEventListener('mousemove', this.dragging);
      document.addEventListener('mouseup', this.dragend);
    },
    dragging(event){
      const dragEvent = this.$static.dragEvent;
      const ghost = this.$refs.ghost;
      if(event.clientY - dragEvent.prevY >> 0 == 0) return;

      const direction = event.clientY - dragEvent.prevY <= 0 ? 'up' : 'down';
      if(!dragEvent.init){
        this.$refs.list.classList.add('xform-designer-silence');
        
        ghost.querySelector('.xform-designer-ghost-template').innerHTML = this.createGhostTemplate(dragEvent);
        ghost.style.display = 'block';
        
        if(null !== dragEvent.field) dragEvent.field.designer.dragging = true;

        dragEvent.init = true;
      }

      // 移动ghost
      const left = event.clientX - dragEvent.offsetLeft;
      const top = event.clientY - dragEvent.offsetTop;
      ghost.style.transform = `translate(${left}px, ${top}px)`;
      dragEvent.prevY = event.clientY;

      // 判断是否有可插入的节点
      const target = dom.findElementFromPoint(event.clientX, event.clientY, '.xform-draggable');
      const notAllowed = 'xform-designer-not-allowed';
      if(null == target){
        return ghost.classList.add(notAllowed);
      }

      if(ghost.classList.contains(notAllowed)) {
        ghost.classList.remove(notAllowed);
      }

      // 标记当前要插入的位置
      const referenceNode = direction == 'up' ? target : target.nextElementSibling;
      target.parentNode.insertBefore(this.$refs.line, referenceNode)
    },
    dragend(event){
      const dragEvent = this.$static.dragEvent;
      const target = dom.findElementFromPoint(event.clientX, event.clientY, '.xform-draggable');
      if(null != target){
        const newIndex = Array.from(this.$refs.list.children).findIndex(item => item == this.$refs.line);

        if(dragEvent.mode == 'sort'){
          const oldIndex = this.value.indexOf(dragEvent.field);
  
          this.sort(oldIndex, newIndex)
        }
  
        if(dragEvent.mode == 'insert'){
          this.insert(newIndex)
        }
      }

      if(null != dragEvent.field) {
        dragEvent.field.designer.dragging = false
      }

      this.$refs.list.classList.remove('xform-designer-silence')
      this.$refs.ghost.style.display = 'none';
      this.$static.dragEvent = null;

      // 清空鼠标事件
      document.removeEventListener('mousemove', this.dragging);
      document.removeEventListener('mouseup', this.dragend);
    },
    createGhostTemplate(dragEvent){
      if(dragEvent.mode == 'insert'){
        return dragEvent.target.querySelector('.xform-template').outerHTML;
      }

      const fieldType = dragEvent.field.findFieldType();
      return `
        <div class="xform-designer-field-type">
          <i class="${fieldType.icon}"></i>
          <span>${dragEvent.field.title}</span>
        </div>
      `;
    },
    createDragEvent(event, field, fieldType, mode){
      const target = event.target.closest('.xform-draggable');
      const rect = target.getBoundingClientRect();

      return {
        init: false,
        mode, // 拖拽模式: sort, insert
        target, // 拖拽的dom元素
        field,
        fieldType,
        prevY: event.clientY,
        offsetLeft: mode == 'insert' ? event.clientX - rect.left : 72,
        offsetTop: mode == 'insert' ? event.clientY - rect.top : 17
      }
    },
    renderFieldPreview(field){
      const ft = field.findFieldType();
      const preview = this.createComponent('preview', field, {props: {field}});

      const className = {
        'xform-designer-preview': true,
        'xform-draggable': true,
        'xform-is-selected': this.selectedField == field,
        'xform-is-dragging': field.designer.dragging
      }

      const domProps = {
        _xform_field: field,
        _xform_index: this.value.indexOf(field)
      }

      return (
        <div class={className} domProps={domProps}>
          {
            ft && ft.custom 
              ? preview
              : (
                <xform-item 
                  class="xform-template" field={field} validation={false} behavior="designer" 
                  label-position={Store.findConfigProp('designer.label.position')} 
                  label-width={Store.findConfigProp('designer.label.width')}
                >{preview}</xform-item>
              )
          }
          <button type="button" class="xform-designer-delete" onClick={e => this.remove(e, field)}>
            <i class="iconfont icon-xform-remove"></i>
          </button>
          <div class="xform-designer-cover" onMousedown={e => this.dragstart(e, field, null, 'sort')}></div>
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
      if(null == this.selectedField) return (
        <div class="xform-setting-tip">点击字段设置属性</div>
      );

      const field = this.selectedField;
      const props = {field};
      const on = {
        update: event => {
          field[event.prop] = event.value;
          
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

      const fieldType = field.findFieldType();
      if(fieldType == null){
        console.warn(`[xform]: ${field.title}(${field.type}) not implement`)
        return null;
      }

      const component = fieldType.extension[`${this.mode}_${target}`] || fieldType.component[target];
      return this.$createElement(component, attrs);
    },
    renderFieldType(fieldType){
      return (
        <div 
          class="xform-designer-field-type-wrap xform-draggable" 
          onMousedown={e => this.dragstart(e, null, fieldType, 'insert')} 
          onClick={e => this.quickInsert(e, fieldType)}
        >
          <div class="xform-designer-field-type xform-template">
            <i class={fieldType.icon}></i>
            <span>{fieldType.title}</span>
          </div>
        </div>
      )
    },
    renderFieldTypePanel(){
      let mode = Store.findMode(this.mode);   
      if(mode.length == 0 || typeof mode[0] != 'object') mode = [{types: mode}];

      return mode.map(item => {
        const title = item.group ? <h3>{item.group}</h3> : null;
        const types = Store.findFieldTypes(item.types);

        return (
          <div class="xform-designer-field-type-group">
            {title}
            <div class="xform-designer-field-types">
              {types.map(this.renderFieldType)}
            </div>
          </div>
        )
      })
    }
  },
  render(){
    console.log('render')
    return (
      <div class="xform-designer">
        <div class="xform-designer-panel">
          {this.renderFieldTypePanel()}  
        </div>
        <div class="xform-designer-main">
          {this.$slots.tool}
          <div class="xform-designer-scroll">
            {this.renderPreview()}
          </div>
        </div>
        <div class="xform-designer-setting">
          {this.renderSetting()}
        </div>
        <div class="xform-designer-preview-line" ref="line" key="xform-line" ></div>
        <div class="xform-designer-ghost" ref="ghost" key="xform-ghost">
          <div class="xform-designer-ghost-template"></div>
          <div class="xform-designer-cover"></div>
        </div>
      </div>
    )
  }
}

export default XFormDesigner;
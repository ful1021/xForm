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
    scroll(event){
      const {pixelY} = dom.normalizeWheel(event);
      this.$refs.scroll.scrollTop += pixelY;
    },
    chooseField(field){
      this.selectedField = field;
      
      this.$nextTick(() => {
        const scroll = this.$refs.scroll;
        const el = this.$refs.list.querySelector('.xform-is-selected');

        if(dom.isHidden(el, scroll)){
          scroll.scrollTop = el.offsetTop;
        }
      })
    },
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
    /** 拖拽插入字段 */
    insert(index){
      const dragEvent = this.$static.dragEvent;
      const field = new XField(dragEvent.target._xform_field_type);

      this.value.splice(index, 0, field);
      this.$emit('input', this.value);

      return field;
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
    dragstart(event){
      // 屏蔽非鼠标左键的点击事件
      if(event.button !== 0) return;

      const dragEvent = this.createDragEvent(event);
      this.$static.dragEvent = dragEvent;
      this.$refs.list.insertBefore(this.$refs.line, dragEvent.mode == 'insert' ? null : dragEvent.target);

      // 监听鼠标移动事件
      document.addEventListener('mousemove', this.dragging);
      document.addEventListener('mouseup', this.dragend);
    },
    dragging(event){
      const dragEvent = this.$static.dragEvent;
      const ghost = this.$refs.ghost;

      if(!dragEvent.init){
        this.$refs.list.classList.add('xform-designer-silence');
        
        ghost.querySelector('.xform-designer-ghost-template').innerHTML = this.createGhostTemplate(dragEvent);
        ghost.style.display = 'block';
        
        if(dragEvent.mode == 'sort'){
          dragEvent.target.classList.add('xform-is-dragging')
        }

        dragEvent.init = true;
      }

      // 移动ghost
      const left = event.clientX - dragEvent.offsetLeft;
      const top = event.clientY - dragEvent.offsetTop;
      ghost.style.transform = `translate(${left}px, ${top}px)`;
      
      // 移动距离小于1,不触发计算
      if(Math.abs(event.clientY - dragEvent.prevY) < 2) return;

      const direction = event.clientY - dragEvent.prevY < 0 ? 'up' : 'down';
      dragEvent.prevY = event.clientY;

      // 判断是否有可插入的节点
      const target = dom.findElementFromPoint(event.clientX, event.clientY, '.xform-droppable');
      const notAllowed = 'xform-designer-not-allowed';
      // 如无匹配点，显示禁止样式
      if(null == target) return ghost.classList.add(notAllowed);

      if(ghost.classList.contains(notAllowed)) {
        ghost.classList.remove(notAllowed);
      }

      // 标记当前要插入的位置
      const line = this.$refs.line;
      const list = this.$refs.list;
      const referenceNode = target == list ? null : direction == 'up' ? target : target.nextElementSibling;

      if(referenceNode == line || (null != referenceNode && referenceNode.previousElementSibling == line)) return;
      list.insertBefore(line, referenceNode);
    },
    dragend(event){
      const dragEvent = this.$static.dragEvent;
      const newIndex = Array.from(this.$refs.list.children).findIndex(item => item == this.$refs.line);
      const target = dom.findElementFromPoint(event.clientX, event.clientY, '.xform-droppable');

      if(dragEvent.mode == 'sort' && null != target){
        const field = dragEvent.target._xform_field;
        const oldIndex = this.value.indexOf(field);

        this.sort(oldIndex, newIndex);
        this.chooseField(field)
        dragEvent.target.classList.remove('xform-is-dragging');
      }

      if(dragEvent.mode == 'insert' && (!dragEvent.init || null != target)){
        const field = this.insert(newIndex);
        this.chooseField(field)
      }

      this.$refs.list.classList.remove('xform-designer-silence')
      this.$refs.ghost.style.display = 'none';
      this.$static.dragEvent = null;

      // 清空鼠标事件
      document.removeEventListener('mousemove', this.dragging);
      document.removeEventListener('mouseup', this.dragend);
    },
    createGhostTemplate(dragEvent){
      const target = dragEvent.target;
      if(dragEvent.mode == 'insert'){
        return target.querySelector('.xform-template').outerHTML;
      }

      const field = target._xform_field;
      const fieldType = field.findFieldType();
      return `
        <div class="xform-designer-field-type">
          <i class="${fieldType.icon}"></i>
          <span>${field.title}</span>
        </div>
      `;
    },
    createDragEvent(event){
      const target = event.target.closest('.xform-draggable');
      const mode = target._xform_mode;
      const rect = target.getBoundingClientRect();

      return {
        init: false,
        mode, // 拖拽模式: sort, insert
        target, // 拖拽的dom元素
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
        'xform-droppable': true,
        'xform-is-selected': this.selectedField == field
      }

      const domProps = {
        _xform_field: field,
        _xform_mode: 'sort'
      }

      return (
        <div class={className} domProps={domProps} key={field.name}>
          <div class="xform-designer-preview-mock">
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
          </div>
          <button type="button" class="xform-designer-delete" onClick={e => this.remove(e, field)}>
            <i class="iconfont icon-xform-remove"></i>
          </button>
          <div class="xform-designer-cover" onMousedown={this.dragstart} onClick={() => this.chooseField(field)}></div>
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
        <div class="xform-designer-list xform-droppable" ref="list">
          {content}
          <span class="xform-designer-preview-line xform-droppable" ref="line" key="xform-line"/>
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
      const domProps = {
        _xform_field_type: fieldType,
        _xform_mode: 'insert'
      }

      return (
        <div 
          class="xform-designer-field-type-wrap xform-draggable" 
          domProps={domProps} onMousedown={this.dragstart}
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
    return (
      <div class="xform-designer">
        <div class="xform-designer-panel">
          {this.renderFieldTypePanel()}  
        </div>
        <div class="xform-designer-main">
          {this.$slots.tool}
          <div class="xform-designer-scroll" ref="scroll">
            {this.renderPreview()}
          </div>
        </div>
        <div class="xform-designer-setting">
          {this.renderSetting()}
        </div>
        <div class="xform-designer-ghost" ref="ghost" key="xform-ghost" onWheel={this.scroll}>
          <div class="xform-designer-ghost-template"></div>
          <div class="xform-designer-cover"></div>
        </div>
      </div>
    )
  }
}

export default XFormDesigner;
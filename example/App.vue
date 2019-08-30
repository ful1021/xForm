<template>
  <div class="example">
    <div class="header">
      <div class="header-left">
        <label class="radio-btn">
          <input type="radio" name="component" value="designer" v-model="component"> 
          <span>designer</span>
        </label>
        <label class="radio-btn">
          <input type="radio" name="component" value="builder" v-model="component"> 
          <span>builder</span>
        </label>
        <label class="radio-btn">
          <input type="radio" name="component" value="viewer" v-model="component"> 
          <span>viewer</span>
        </label>
      </div>
      <div class="header-right">
        <button type="button" @click="submit" v-if="component != 'viewer'">提交</button>
      </div>
    </div>

    <keep-alive>
      <component :is="component" class="main" ref="component"/>
    </keep-alive>
  </div>
</template>

<script>
import Designer from './components/Designer.vue';
import Builder from './components/Builder.vue';
import Viewer from './components/Viewer.vue'

export default {
  name: 'app',
  data(){
    return {
      component: 'designer'
    }
  },
  methods: {
    submit(){
      let component = this.$refs.component;

      if(typeof component.submit == 'function') {
        component.submit();
      }
    }
  },
  components: {
    [Designer.name]: Designer,
    [Builder.name]: Builder,
    [Viewer.name]: Viewer
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}

html{
  background-color: #f2f2f2;
}

.example{
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
}

.main{
  flex: 1;
  height: 0;
  overflow: auto;
}

.header{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  background-color: #e5e5e5;
}

.header-left{
  padding-left: 10px;
}

.header-right{
  padding-right: 10px;
}

.radio-btn{
  display: inline-block;
  width: 100px;
  cursor: pointer;
}

.radio-btn > input[type="radio"]{
  margin: 0;
}
</style>
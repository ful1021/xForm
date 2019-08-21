<template>
  <div class="example">
    <div class="header">
      <div>
        <label>
          <input type="radio" name="component" value="designer" v-model="component"> 
          <span>designer</span>
        </label>
        <label>
          <input type="radio" name="component" value="builder" v-model="component"> 
          <span>builder</span>
        </label>
        <label>
          <input type="radio" name="component" value="preview" v-model="component"> 
          <span>preview</span>
        </label>
      </div>
      <div>
        <button type="button" v-if="component == 'designer'" @click="save">保存</button>
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
import Preview from './components/Preview.vue'

export default {
  name: 'app',
  data(){
    return {
      component: 'designer'
    }
  },
  methods: {
    save(){
      let component = this.$refs.component;
      let data = [];

      if(typeof component.submit == 'function') {
        data = component.submit();
      }

      console.log(data)
    }
  },
  components: {
    [Designer.name]: Designer,
    [Builder.name]: Builder,
    [Preview.name]: Preview
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
}

.header{
  display: flex;
  flex-flow: row nowrap;
  height: 40px;
}
</style>
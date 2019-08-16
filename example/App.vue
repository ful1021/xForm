<template>
  <div class="example">
    <div class="header">
      <label>
        <input type="radio" name="component" value="design" v-model="component"> 
        <span>design</span>
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

    <keep-alive>
      <component :is="component" class="main"/>
    </keep-alive>
  </div>
</template>

<script>
import Design from './components/Design.vue';
import Builder from './components/Builder.vue';
import Preview from './components/Preview.vue'

export default {
  name: 'app',
  data(){
    return {
      component: 'design'
    }
  },
  components: {
    [Design.name]: Design,
    [Builder.name]: Builder,
    [Preview.name]: Preview
  }
}
</script>

<style>
.example{
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
}

.main{
  flex: 1;
}
</style>
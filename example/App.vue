<template>
  <div class="example">
    <div class="header">
      <nav class="nav">
        <router-link to="/designer" class="nav-link">designer</router-link>
        <router-link to="/builder" class="nav-link">builder</router-link>
        <router-link to="/viewer" class="nav-link">viewer</router-link>
      </nav>
      <div class="header-right">
        <button type="button" @click="submit" v-if="component != 'viewer'">查看JSON</button>
      </div>
    </div>

    <keep-alive>
      <router-view class="main" ref="component"/>
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
  watch: {
    component(value){
      this.$router.push(`/${value}`)
    }
  },
  components: {
    [Designer.name]: Designer,
    [Builder.name]: Builder,
    [Viewer.name]: Viewer
  }
}
</script>

<style lang="scss">
*{
  box-sizing: border-box;
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

  position: relative;
  z-index: 99;

  height: 40px;
  background-color: $--xform-color-primary;
  box-shadow: 0 1px 8px rgba($--xform-color-primary, .5)
}

.nav{
  padding-left: 5px;
  display: flex;
  flex-flow: row nowrap;
}

.nav-link{
  display: block;
  line-height: 20px;
  padding: 5px 8px;
  border-radius: 4px;
  color: #fff;
  text-decoration: none;
  transition: all ease .3s;

  &:hover,
  &.router-link-active{
    background-color: #fff;
    color: $--xform-color-primary;
  }

  & + .nav-link{
    margin-left: 10px;
  }
}

.header-right{
  padding-right: 10px;
}
</style>
<template>
  <div class="example">
    <div class="header">
      <nav class="nav">
        <router-link to="/designer" class="nav-link">designer</router-link>
        <router-link to="/builder" class="nav-link">builder</router-link>
        <router-link to="/viewer" class="nav-link">viewer</router-link>
      </nav>
      <div class="header-right">
        <button type="button" @click="submit" v-if="showJSONBtn">查看JSON</button>
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
  methods: {
    submit(){
      let component = this.$refs.component;

      if(typeof component.submit == 'function') {
        component.submit();
      }
    }
  },
  computed: {
    showJSONBtn(){
      return /designer|builder/.test(this.$route.path);
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
body{
  padding: 0;
  margin: 0;
  font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Helvetica,Microsoft YaHei,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
}

textarea{
  display: block;
  width: 100%;
  padding: 10px;
}

input, textarea{
  font-family: Arial, Helvetica, sans-serif;
}

textarea.example-value{
  max-height: calc(100vh - 150px);
  resize: none;
  font-size: 14px;
  font-family: Consolas, Arial, Helvetica, sans-serif;
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
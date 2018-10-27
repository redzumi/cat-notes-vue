<template>
  <div id="app">
    <md-app>
  
      <md-app-toolbar class="header__toolbar md-medium md-primary md-elevation-1">
        <Toolbar/>
      </md-app-toolbar>
  
      <!-- <md-app-drawer md-permanent="full" class="header__drawer">
        <Drawer/>
      </md-app-drawer> -->
  
      <md-app-content class="content">
        <Content/>
      </md-app-content>
  
    </md-app>
  </div>
</template>

<script>
  import Toolbar from './layout/Toolbar'
  import Drawer from './layout/Drawer'
  import Content from './layout/Content'
  export default {
    name: 'App',
    components: {
      Toolbar,
      Drawer,
      Content,
    }
  }
</script>

<style lang="stylus">
  body
    height 100%
    background #e7e7e7
</style>
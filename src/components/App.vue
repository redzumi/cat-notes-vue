<template>
  <div id="app">
    <v-app>
  
      <v-toolbar app class="header__toolbar">
        <Toolbar/>
      </v-toolbar>
  
      <!-- <v-navigation-drawer permanent absolute>
        <Drawer/>
      </v-navigation-drawer> -->
  
      <v-content class="content">
        <Content/>
      </v-content>
  
    </v-app>
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
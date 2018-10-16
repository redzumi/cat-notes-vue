<template>
  <div id="app">
    <md-app>
  
      <md-app-toolbar class="header__toolbar md-medium md-primary">
        <page-toolbar/>
      </md-app-toolbar>
  
      <md-app-drawer md-permanent="full" class="header__drawer">
        <page-drawer/>
      </md-app-drawer>
  
      <md-app-content class="content">
        <page-content/>
      </md-app-content>
  
    </md-app>
  </div>
</template>

<script>
  import PageToolbar from './page/page-toolbar'
  import PageDrawer from './page/page-drawer'
  import PageContent from './page/page-content'
  export default {
    name: 'App',
    components: {
      PageToolbar,
      PageDrawer,
      PageContent,
    }
  }
</script>

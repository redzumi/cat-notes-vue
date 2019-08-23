<template>
  <div id="app">
    <v-app>
      <v-toolbar app class="header__toolbar">
        <Toolbar />
      </v-toolbar>

      <Drawer />

      <v-content class="content">
        <Content />
      </v-content>
    </v-app>
  </div>
</template>

<script lang="ts" src="./App.ts"></script>

<style lang="stylus">
body {
  height: 100%;
  background: #e7e7e7;
}
</style>
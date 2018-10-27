<template>
  <div>
    <v-toolbar flat>
      Navigation
    </v-toolbar>
  
    <v-divider></v-divider>
  
    <v-list dense class="pt-0">
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
  
        <v-list-tile-content>
          <v-list-tile-title>Test</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<style lang="stylus">
  .header
    &__drawer
      width 240px
      color #707070
</style>
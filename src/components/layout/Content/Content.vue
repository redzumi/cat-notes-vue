<template>
  <div class="page-content">
    <NotesList />
    <v-layout class="note">
      <v-flex xs12 justify-center>
        <Note />
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts" src="./Content.ts"></script>

<style lang="stylus">
.note {
  background: darken(#fff, 15%);
}

.page-content {
  display: flex;
  height: 100%;
  background: darken(#fff, 10%);
}
</style>


<template>
  <div class="page-content">
    <NotesList/>
    <v-layout class="note">
      <v-flex xs12 justify-center>
        <Note />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import NotesList from '../notes/NotesList'
  import Note from '../notes/Note'
  export default {
    components: {
      NotesList,
      Note,
    }
  }
</script>

<style lang="stylus">
  .note
    background darken(#fff, 15%)
  .page-content
    display flex
    height 100%
    background darken(#fff, 10%)
</style>


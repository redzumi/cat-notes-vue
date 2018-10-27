<template>
  <div class="page-content">
    <NotesList/>
    <v-layout>
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
  .page-content
    display flex
    height 100%
    background #e7e7e7
</style>


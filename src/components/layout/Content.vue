<template>
  <div class="page-content">
    <NotesList/>
    <Note />
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
  .md-app-content
    padding 0

  .page-content
    display flex
    background #e7e7e7
</style>


<template>
  <div class="page-content">
    <!-- <md-empty-state md-icon="devices_other" md-label="Cat Notes" md-description="Nothing here...">
        </md-empty-state> -->
    <notes-list/>
    <note />
  </div>
</template>

<script>
  import NotesList from '../notes/notes-list'
  import Note from '../notes/note'
  export default {
    name: 'page-content',
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
    min-height 100%
</style>


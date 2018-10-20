<template>
  <div>
    <!-- <md-empty-state md-icon="devices_other" md-label="Cat Notes" md-description="Nothing here...">
        </md-empty-state> -->
    <notes-list/>
  </div>
</template>

<script>
  import NotesList from '../notes/notes-list'
  export default {
    name: 'page-content',
    components: {
      NotesList
    }
  }
</script>

<template>
  <div class="notes-list">
    <md-list>
      <md-list-item v-for="note in notes" :key="note.id" @click="showNote(note)">
        {{ note.title }}
      </md-list-item>
    </md-list>
    <md-button class="md-primary" @click="addNewNote">Add new note</md-button>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions
  } from 'vuex'
  
  export default {
    name: 'notes-list',
    computed: mapState({
      notes: state => state.notes.list
    }),
    created() {
      this.$store.dispatch('notes/getNotes')
    },
    methods: {
      ...mapActions('notes', [
        'showNote'
      ]),
      addNewNote() {
        this.showNote(null)
      }
    }
  }
</script>

<style lang="stylus">
.notes-list {
  background: #eeeeee;
}
</style>
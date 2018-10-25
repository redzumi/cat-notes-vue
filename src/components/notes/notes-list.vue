<template>
  <div class="notes-list">
    <md-list>
      <md-list-item v-for="note in notes" :key="note.id" @click="showNote">
        {{ note.title }}
      </md-list-item>
    </md-list>
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
      alert() {
        window.alert('...')
      }
    }
  }
</script>

<style lang="stylus">
.notes-list {
  background: #eeeeee;
}
</style>
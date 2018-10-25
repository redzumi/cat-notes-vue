<template>
  <div class="notes-list">
    <md-list>
      <md-list-item>Plain Text</md-list-item>
      <md-list-item @click="alert">Button</md-list-item>
      <md-list-item href="https://google.com" target="_blank">Link</md-list-item>
      <md-list-item to="/components/list/router">Link Router</md-list-item>
      <md-list-item to="/components/list">Link Router Active Color</md-list-item>
      <li v-for="note in notes" :key="note.id">
        {{ note.title }} - {{ note.body }}
      </li>
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
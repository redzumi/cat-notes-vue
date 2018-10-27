<template>
  <div class="notes-list">
    <div class="notes-list__item notes-list__item_right">
      <md-button class="md-fab md-accent notes-list__add" @click="addNewNote">
        <md-icon>add</md-icon>
      </md-button>
    </div>
    <div class="notes-list__item" v-for="note in notes" :key="note.id" @click="showNote(note)">
      <md-card v-bind:class="{ 'md-elevation-12': currentNote === note }">
        <md-card-header>
          <div class="md-title">{{ note.title }}</div>
        </md-card-header>
        <md-card-content>
          {{ note.body }}
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
  import {
    mapState,
    mapGetters,
    mapActions
  } from 'vuex'
  
  export default {
    computed: {
      ...mapState({
        notes: state => state.notes.list
      }),
      ...mapGetters('notes', {
        currentNote: 'currentNote',
      })
    },
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
  .notes-list
    display flex
    align-items center
    flex-direction column
    width 40%
    margin-bottom 5%
    max-height 80vh
    min-height 80vh
    overflow auto

    &__item
      width 80%
      
      & + &
        margin-top 40px

      &_right
        justify-content flex-end
        display flex

    &__add
      z-index 2
      position fixed
      margin-top 25px
</style>
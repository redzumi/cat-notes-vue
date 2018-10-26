<template>
  <div class="note" v-if="currentNote === null">
    <md-card>
      <md-card-header>
        <div class="md-title">Add new note</div>
      </md-card-header>
  
      <md-field>
        <label>Title</label>
        <md-input v-model="title"></md-input>
      </md-field>
  
      <md-field>
        <label>Body</label>
        <md-textarea v-model="body"></md-textarea>
      </md-field>
  
      <md-card-actions>
        <md-button @click="submitNote">Добавить</md-button>
      </md-card-actions>
    </md-card>
  </div>
  <div class="note" v-else>
    <md-card>
      <md-card-header>
        <div class="md-title">{{ currentNote.title }}</div>
      </md-card-header>
      <md-card-content>
        {{ currentNote.body }}
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'
  
  export default {
    data: () => ({
      title: '',
      body: '',
    }),
    computed: {
      ...mapGetters('notes', {
        currentNote: 'currentNote',
      })
    },
    methods: {
      ...mapActions('notes', [
        'addNote'
      ]),
      submitNote() {
        this.addNote({
          id: Math.random(),
          title: this.title,
          body: this.body
        })
      }
    }
  }
</script>

<style lang="stylus">
.note {
  width 100%
  background #e7e7e7
}
</style>
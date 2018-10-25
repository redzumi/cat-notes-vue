<template>
  <div class="note">
    <md-card>
      <md-card-header>
        <div class="md-title">Card without hover effect</div>
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
</template>

<script>
  import {
    mapActions
  } from 'vuex'
  
  export default {
    name: 'note',
    data: () => ({
      title: '',
      body: '',
    }),
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
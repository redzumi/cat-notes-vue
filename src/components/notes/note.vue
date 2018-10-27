<template>
  <v-card v-if="currentNote === null" class="note elevation-12">
    <v-card-title primary-title>
      <h3 class="headline mb-0">Add new note</h3>
    </v-card-title>
  
    <v-card-text>
      <v-text-field v-model="title" label="Title" required></v-text-field>
      <v-textarea v-model="body" label="Body"></v-textarea>
    </v-card-text>
  
    <v-card-actions>
      <v-btn flat color="blue" @click="submitNote">Добавить</v-btn>
    </v-card-actions>
  </v-card>
  <v-card class="note" v-else>
    <v-card-title primary-title>
      <h3 class="headline mb-0">{{ currentNote.title }}</h3>
    </v-card-title>
    <v-card-text>
      {{ currentNote.body }}
    </v-card-text>
  </v-card>
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
  .note
    padding 16px
</style>
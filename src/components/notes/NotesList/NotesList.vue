<template>
  <section class="notes-list">
    <div class="notes-list__add">
      <v-btn color="blue" dark small @click="addNewNote">
        <v-icon>add</v-icon>
      </v-btn>
    </div>
    <div v-for="note in notes" :key="note.id" class="notes-list__item" @click="showNote(note)">
      <v-card v-bind:class="{ 'elevation-12': currentNote === note }">
        <v-card-title primary-title>
          <h3 class="headline mb-0">{{ note.title }}</h3>
        </v-card-title>
        <v-card-text>
          {{ note.body }}
        </v-card-text>
      </v-card>
    </div>
  </section>
</template>

<script lang="ts" src="./NotesList.ts"></script>

<style lang="stylus">
  .notes-list
    position relative
    width 40%
    padding 16px
    max-height 80vh
    min-height 80vh
    overflow auto

    &__item
      & + &
        margin-top 32px
      
    &__add
      display flex
      justify-content flex-end
      margin-left auto
      margin-bottom 32px
</style>
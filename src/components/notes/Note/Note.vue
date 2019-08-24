<template>
  <v-card v-if="current === null" class="note elevation-12">
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
      <h3 class="headline mb-0">{{ current.title }}</h3>
    </v-card-title>
    <v-card-text>{{ current.body }}</v-card-text>
  </v-card>
</template>

<script lang="ts" src="./Note.ts"></script>

<style lang="stylus">
.note {
  padding: 16px;
}
</style>
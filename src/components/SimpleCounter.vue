<template>
  <b-row class="justify-content-md-center counter-row">
    <b-button variant="primary" v-on:click="count++">
      Current counter value — {{ count }}</b-button>
  </b-row>
</template>

<script>
  export default {
    name: 'SimpleCounter',
    data() {
      return {
        count: 0
      }
    }
  }
</script>

<style>
  .counter-row {
    padding: 16px;
  }
</style>
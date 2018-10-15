<template>
  <div class="counter-row">
    <md-button class="md-raised" v-on:click="count++">
      Current counter value — {{ count }}</md-button>
  </div>
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
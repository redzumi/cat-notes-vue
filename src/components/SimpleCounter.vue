<template>
  <button v-on:click="count++">Current counter value — {{ count }}</button>
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
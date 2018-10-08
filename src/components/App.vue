<template>
  <div id="app">
    <span>Counter: </span>
    <SimpleCounter/>
  </div>
</template>

<script>
  import SimpleCounter from './SimpleCounter'
  export default {
    name: 'App',
    components: {
      SimpleCounter
    }
  }
</script>

<style>
  
</style>
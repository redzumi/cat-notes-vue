import Vue from 'vue';

new Vue({
  el: '#app',
  data: {
    foo: 'bar'
  },
  created() {
    console.log('Foo is: ' + this.foo);
  }
});

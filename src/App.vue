<template>
  <div id="app">    
    <counter v-bind:count="0" v-bind:increment="1"/>
  </div>
</template>

<script>
import counter from './components/counter.vue'

export default {
  name: 'App',
  components: {
    counter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">    
    <nav>
      <router-link to="/counter">Counter</router-link>
      <router-link to="/string-reverser">String Reverser</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
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

#app nav a {
  margin: 10px;
}
</style>

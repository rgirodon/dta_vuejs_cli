<template>
  <div id="app">    
    <nav>
      <router-link to="/counter">Counter</router-link>

      <router-link to="/shopping/epicerie">Shopping List Epicerie</router-link>

      <router-link to="/shopping/bricolage">Shopping List Bricolage</router-link>
    </nav>
    <router-view></router-view>   
  </div>
</template>

<script>

export default {
  name: 'App'
};
</script>

<style>
nav a+a {
  margin-left: 10px;
}
</style>

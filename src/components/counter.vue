<template>
  <div>
    <p>Button Component</p>
    <button v-on:click="incrementCount">You clicked me {{ counterValue }} times.</button>
  </div>
</template>

<script>
export default {
  name: 'counter',
  computed: {
    counterValue: function() {
      return this.$store.state.count;
    }
  },
  methods: {
    incrementCount: function() {
      this.$store.commit('increment');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <button v-on:click="incrementCount">You clicked me {{ count }} times.</button>
</template>

<script>
export default {
  name: 'counter',
  props: {
    count: Number,
    increment: Number
  },
  methods: {
    incrementCount: function() {
        this.count = this.count + this.increment;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

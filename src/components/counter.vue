<template>
  <button v-on:click="incrementCount">You clicked me {{ count }} times.</button>
</template>

<script>
export default {
  name: 'counter',
  props: {
    count: {
      type : Number,
      default: 0
    },
    increment: {
      type : Number,
      default: 1
    }
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
button {
  background-color: #255483;
  color: #ffffff;
}
</style>

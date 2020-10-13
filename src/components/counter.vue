<template>
  <button v-on:click="incrementCount">You clicked me {{ counterValue }} times.</button>
</template>

<script>
export default {
  name: 'counter',
  data: function() {
    return {
      counterValue: 0
    }
  },
  props: {
    count: Number,
    increment: Number
  },
  methods: {
    incrementCount: function() {
        this.counterValue = this.counterValue + this.increment;
    }
  },
  created: function() {
    this.counterValue = this.count;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

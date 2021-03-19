<template>
  <button v-on:click="incrementCount">You clicked me {{ count_value }} times.</button>
</template>

<script>
export default {
  name: 'counter',
  data: function() {
    return {
      count_value: Number
    }
  },
  props: {
    count: Number,
    increment: Number
  },
  mounted: function() {
    this.count_value = this.count;
  },
  methods: {
    incrementCount: function() {
        this.count_value = this.count_value + this.increment;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

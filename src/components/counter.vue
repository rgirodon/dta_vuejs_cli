<template>
  <div>
    <p>Button Component</p>
    <button v-on:click="incrementCount">You clicked me {{ counterValue }} times.</button>
  </div>
</template>

<script>
export default {
  name: 'counter',
  data: function() {
    return {
      counterValue: 0
    };
  },
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
  created: function() {
    this.counterValue = this.count;
  },
  methods: {
    incrementCount: function() {
        this.counterValue = this.counterValue + this.increment;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

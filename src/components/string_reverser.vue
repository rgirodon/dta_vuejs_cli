<template>
  <div>
    <p>Reverser Component</p>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
    <button v-on:click="reverse">Reverse it.</button>
  </div>
</template>

<script>
export default {
  name: 'string-reverser',
  data: function() {
    return {
      message: ''
    };
  },
  methods: {
    reverse: function() {
        this.message = this.message.split('').reverse().join('');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

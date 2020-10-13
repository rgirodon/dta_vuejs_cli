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
  computed: {
    message: {
      get () {
        return this.$store.state.message
      },
      set (newValue) {
        return this.$store.commit('setMessage', newValue)
      }
    }
  },
  methods: {
    reverse: function() {
      this.$store.commit('reverse');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

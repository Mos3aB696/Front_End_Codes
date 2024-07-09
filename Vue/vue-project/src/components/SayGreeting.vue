<template>
  <!-- Only one root element -->
  <div>
    <h1>{{ greeting }}</h1>
    <button @click="change">Change</button>
  </div>
</template>

<script>
export default {
  name: 'Say-Greet',
  data() {
    return {
      greeting: 'Hello From Vue Component'
    }
  },
  methods: {
    change() {
      this.greeting = 'Hello This Is My First Vue Component'
    }
  }
}
</script>

<style scoped>
div {
  margin: 5px 0;
  max-width: 100%;
  background-color: #73abfe;
}
h1 {
  color: red;
  background-color: #fff;
  padding: 5px 10px;
  font-size: 20px;
  text-align: center;
  border-radius: 5px;
}
button {
  padding: 5px 10px;
  border: 1px solid red;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  margin: 5px auto;
  display: block;
}
</style>

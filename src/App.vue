<template>
  <div id="app">
    <web-header />
    <home />
  </div>
</template>

<script>
import WebHeader from "./components/WebHeader.vue";
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    WebHeader,
    Home
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
}
</style>

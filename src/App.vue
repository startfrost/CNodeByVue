<template>
  <div id="app">
    <web-header />
    <router-view></router-view>
  </div>
</template>

<script>
import WebHeader from "./components/WebHeader.vue";

export default {
  name: "App",
  components: {
    WebHeader
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

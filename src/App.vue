<template>
  <div class="container">
    <div class="row rows-cols-3">
      <div class="col"></div>
      <div class="col"><Quote /></div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote";
export default {
  name: "App",
  components: {
    Quote,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

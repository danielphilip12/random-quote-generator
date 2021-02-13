<template>
  <div class="container">
    <div class="nav">
      <!-- <router-link to="/">Random Quote</router-link>
      <router-link to="/quotes/Bill Gates">Bill Gates</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
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

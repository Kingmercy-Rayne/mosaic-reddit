<template>
  <div id="app">
    <The--Navbar />
    <router-view />
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';

export default {
  components: {
    'The--Navbar': TheNavbar,
  },
};
</script>

<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.page {
  width: 100%;
}
</style>

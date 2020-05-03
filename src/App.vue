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
  font-family: 'Montserrat', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.page {
  width: 100%;
  position: relative;
  z-index: 1;
  margin-top: 10vh;
}
</style>

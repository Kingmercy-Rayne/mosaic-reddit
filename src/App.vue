<template>
  <div id="app">
    <The--Navbar />
    <the-navbar-sort />
    <router-view />
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';
import TheNavbarSort from './components/TheNavbarSort.vue';

export default {
  components: {
    'The--Navbar': TheNavbar,
    TheNavbarSort,
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
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

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
  mounted() {
    // check for, and set theme
    const theme = window.localStorage.getItem('theme');
    if (theme) {
      document.documentElement.dataset.theme = theme;
    }
  },
};
</script>

<style lang="stylus">
#app {
  min-height: 100vh;
  font-family: 'Montserrat', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: var(--bg-color--primary);
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

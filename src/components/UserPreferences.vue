<template>
  <li class="user-preferences__container">
    <i v-if="!isDarkMode" class="fas fa fa-moon-o" @click="setDarkMode"></i>
    <i v-if="isDarkMode" class="fas fa fa-sun-o" @click="setLightMode"></i>
  </li>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'UserPreferences',
  data() {
    return {
      isDarkMode: false,
    };
  },
  computed: {
    ...mapState(['editorsPick']),
  },
  methods: {
    setDarkMode() {
      this.isDarkMode = true;
      document.documentElement.dataset.theme = 'dark';
      window.localStorage.setItem('theme', 'dark');
    },
    setLightMode() {
      this.isDarkMode = false;
      document.documentElement.dataset.theme = 'light';
      window.localStorage.setItem('theme', 'light');
    },
  },
  mounted() {
    // check for theme in localstorage and edit toggle-variable accordingly
    const themeState = window.localStorage.getItem('theme');
    // eslint-disable-next-line
    this.isDarkMode = themeState === 'dark' ? true : false;
  },
};
</script>

<style lang="stylus" scoped>
.user-preferences__container {
  position: relative;
  margin: 0 0.3em;
  padding: 0.4em;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    margin: 0 0.1em;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>

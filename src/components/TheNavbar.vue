<template>
  <nav class="nav">
    <the-logo />
    <v-search />
    <ul>
      <editors-pick />
      <user-preferences />
    </ul>
  </nav>
</template>

<script>
import TheLogo from '@/components/TheLogo.vue';
import VSearch from '@/components/VSearch.vue';
import EditorsPick from '@/components/EditorsPick.vue';
import UserPreferences from '@/components/UserPreferences.vue';

export default {
  name: 'TheNavbar',
  components: {
    TheLogo,
    VSearch,
    EditorsPick,
    UserPreferences,
  },
};
</script>

<style lang="stylus" scoped>
.nav {
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4em var(--padding-LR--global);
  background: var(--bg-color--alt);

  @media screen and (max-width: 480px) {
    padding: 0.4em 5%;
  }

  ul {
    display: flex;

    .bookmark {
      padding: 0.4em;
      margin: 0 1em;
      color: #222;
      font-size: 1rem;
      border-radius: 50%;
      transition: all 0.3s ease-in-out;
      cursor: pointer;

      @media screen and (max-width: 480px) {
        margin: 0 0.1em;
      }

      &:hover, &:active {
        // border: solid thin #888;
        // transform: scale(0.95);
      }
    }
  }
}
</style>

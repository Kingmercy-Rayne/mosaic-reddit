<template>
  <nav class="nav">
    <ul>
      <the-logo />
      <v-search />
      <li><i class="fas fa fa-arrow-down"></i></li>
    </ul>
  </nav>
</template>

<script>
import TheLogo from '@/components/TheLogo.vue';
import VSearch from '@/components/VSearch.vue';

export default {
  name: 'TheNavbar',
  components: {
    TheLogo,
    VSearch,
  },
};
</script>

<style lang="stylus" scoped>
.nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;
  z-index: 10;
  background: #fff;
  box-shadow: -0.2em 0.01em 1em 0.01em #222;

  ul {
    display: flex;
    padding: 0.4em;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    height: 100%;

    li {
      padding: 0.4em;
      margin: 0 1em;
      border-radius: 50%;
      line-height: 0.5;
      transition: all 0.4 ease-in-out;
      color: #CDE0C9;
      opacity: 0.9;
      font-size: 1rem;

      &:hover {
        border: solid thin #888;
        opacity: 0.95;
        transform: scale(0.95);
      }

      &:nth-child(1) {
        color: black;
        background: #F9E07F;
        padding: 0;
      }

      &:nth-child(2) {
        margin-left: auto;
      }

      &:not(:nth-child(1)):hover {
        color: #eee;
      }
    }
  }
}
</style>

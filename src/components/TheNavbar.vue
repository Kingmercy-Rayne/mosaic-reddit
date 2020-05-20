<template>
  <nav class="nav">
    <the-logo />
    <v-search />
    <ul>
      <li><i class="fas fa fa-th"></i></li>
      <li><i class="fas fa fa-book"></i></li>
      <li><i class="fas fa fa-star"></i></li>
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
  padding: 0.4em;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  ul {
    display: flex;

    li {
      padding: 0.4em;
      margin: 0 1em;
      line-height: 0.5;
      transition: all 0.4 ease-in-out;
      color: #222;
      font-size: 1rem;
      border-radius: 50%;
      transition: all 0.3s ease-in-out;
      cursor: pointer;

      &:hover {
        border: solid thin #888;
        transform: scale(0.95);
      }
    }
  }
}
</style>

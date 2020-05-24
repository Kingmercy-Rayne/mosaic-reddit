<template>
  <nav class="nav">
    <the-logo />
    <v-search />
    <ul>
      <editors-pick />
      <li><i class="fas fa fa-book"></i></li>
    </ul>
  </nav>
</template>

<script>
import TheLogo from '@/components/TheLogo.vue';
import VSearch from '@/components/VSearch.vue';
import EditorsPick from '@/components/EditorsPick.vue';

export default {
  name: 'TheNavbar',
  components: {
    TheLogo,
    VSearch,
    EditorsPick,
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
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0.4em;
  background: #fff;
  box-shadow: -0.2em 0.01em 7px 0.2px #222;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;

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

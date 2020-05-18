<template>
  <ul class="the-navbar-sort">
    <ul>
      <li v-for="(item, index) in filterFlags" :key="index">
        <filter-flag :filter="item.filter" :iconClass="item.iconClass" />
      </li>
    </ul>
  </ul>
</template>

<script>
import FilterFlag from '@/components/FilterFlag.vue';

export default {
  name: 'TheNavbarSort',
  data() {
    return {
      filterFlags: [
        {
          filter: 'New',
          iconClass: 'fas fa fa-tag',
        },
        {
          filter: 'Hot',
          iconClass: 'fas fa fa-fire',
        },
        {
          filter: 'Top',
          iconClass: 'fas fa fa-bar-chart',
        },
      ],
    };
  },
  components: {
    FilterFlag,
  },
};
</script>

<style lang="stylus" scoped>
.the-navbar-sort {
  position: relative;
  top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10vh;
  width: 100%;
  padding: 1em;
  BACKGROUND: #eee;
  // border: solid thin crimson;
  color: black;

  ul {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    li {
      margin: 0 1em;
    }
  }
}
</style>

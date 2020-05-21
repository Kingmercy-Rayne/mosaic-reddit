<template>
  <span
    class="filter-flag"
    @click="sortPosts"
    :class="filter == sortBy ? 'filter-flag__background--active' : ''"
  >
    <i :class="iconClass"></i>
    <h5>{{ filter }}</h5></span
  >
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'FilterFlag',
  props: ['filter', 'iconClass'],
  computed: {
    ...mapState(['sortBy']),
  },
  methods: {
    sortPosts() {
      // change sortBy state in the store and make new API call based on updated data
      this.$store.commit('CHANGE_SORTING_ORDER', this.filter);
      this.$store.dispatch('FETCH_POSTS');
    },
  },
};
</script>

<style lang="stylus" scoped>
.filter-flag {
  padding: 0.5em;
  border: solid thin #bbb;
  font-family: var(--font-family--alt);
  font-size: 0.8rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: capitalize;

  & * {
    margin: 0.2em 0.8em;
  }

  i {
    font-size: 1rem;
    // color: green;
  }
}

.filter-flag__background--active {
  background: var(--button-bg--primary);
  color: var(--text-color--alt);
  border: none;
  border-radius: 0.4em;
}

.filter-flag__icon--active {
  color;
}
</style>

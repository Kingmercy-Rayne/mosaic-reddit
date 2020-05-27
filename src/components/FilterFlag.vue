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
  padding: 0.3em;
  border: solid thin var(--border-color--primary);
  background: transparent;
  font-family: var(--font-family--alt);
  font-size: 0.8rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: capitalize;
  border-radius: 0.5em;
  color: var(--text-color--primary);

  @media screen and (max-width: 800px) {
    padding: 0.2em;
    font-size: 0.7rem;
  }

  @media screen and (max-width: 480px) {
    padding: 0.2em;
  }

  & * {
    margin: 0.2em 0.8em;
  }

  i {
    font-size: 1rem;

    @media screen and (max-width: 800px) {
      font-size: 0.9rem;
    }
  }
}

.filter-flag__background--active {
  background: var(--button-bg--primary);
  color: var(--text-color--alt);
  border: none;
}

.filter-flag__icon--active {
  // redundant
  color;
}
</style>

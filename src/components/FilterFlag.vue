<template>
  <span class="filter-flag" @click="sortPosts">
    <i :class="iconClass"></i>
    <h5>{{ filter }}</h5></span
  >
</template>

<script>
export default {
  name: 'FilterFlag',
  props: ['filter', 'iconClass'],
  methods: {
    sortPosts() {
      this.$store.commit('CHANGE_SORTING_ORDER', this.filter);
      console.log('sorting by: ', this.$store.state.sortBy);
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
  }
}
</style>

<template>
  <div class="v-search">
    <form action="" @submit.prevent="fetchPostsFromSubreddit">
      <button type="submit"><i class="fas fa fa-search"></i></button>
      <input
        type="search"
        name="search"
        v-model="searchInput"
        placeholder="Search for a subreddit"
        aria-label="Search for different subreddit"
      />
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'VSearch',
  // data() {
  //   return {
  //     searchInput: '',
  //   };
  // },
  computed: {
    ...mapState(['targetSubreddit']),
    searchInput: {
      set(searchInput) {
        this.$store.commit('CHANGE_TARGET_SUBREDDIT', searchInput);
      },
      get() {
        return this.targetSubreddit;
      },
    },
  },
  methods: {
    fetchPostsFromSubreddit() {
      this.$store.commit('CHANGE_LOADING_STATE', true);
      this.$store.dispatch('FETCH_POSTS');
    },
  },
};
</script>

<style lang="stylus" scoped>
.v-search {
  // border: solid thin brown;
  // padding: 0.5em;
  width: 35%;
  font-family: var(--font-family--primary);

  // height:100%;
  form {
    // set padding for button and input
    --form-padding: 0.5em;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 1em;
    border: solid thin var(--border-color--primary);

    input {
      width: 100%;
      padding: var(--form-padding);
      font-size: 1rem;
      background: none;
      border: none;
      // &:s
    }

    button {
      // border: solid thin green;
      top: 0;
      left: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: var(--form-padding);

      i {
        color: var(--text-color--primary);
        font-size: 1rem;
      }
    }
  }
}
</style>

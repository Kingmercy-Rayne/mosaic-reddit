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
      // bind the Computed Setter directly to the store mutation
      // and v-model the getter unto the Inputfield
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
  width: 45%;
  font-family: var(--font-family--primary);

  @media screen and (max-width: 800px) {
    width: 50%;
  }

  @media screen and (max-width: 480px) {
    flex-grow: 1;
  }

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
    border: solid thin var(--bg-color--alt);
    background: var(--bg-color--alt);

    input {
      width: 100%;
      padding: var(--form-padding);
      background: none;
      border: none;
      font-size: 1rem;

      @media screen and (max-width: 800px) {
        font-size: 0.8rem;
      }
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
        color: var(--text-color--tri);
        font-size: 1rem;

        @media screen and (max-width: 800px) {
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>

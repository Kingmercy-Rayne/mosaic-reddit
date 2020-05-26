<template>
  <div class="page">
    <loading-indicator v-if="isLoading" />
    <div v-else class="mosaic-container">
      <!--
      <div class="card">1</div>
      <div class="card card--wide">2</div>
      <div class="card">3</div>
      <div class="card card--mid">4</div>
      <div class="card card--tall">5</div>
      <div class="card">6</div>
      <div class="card card--wide">7</div>
      <div class="card">8</div> -->
      <div class="card" v-for="(post, id) in posts" :key="id">
        <div class="img__container">
          <img :src="post.data.thumbnail" alt="" />
          <div class="backdrop-filter"></div>
        </div>
        <p class="post-details">
          <span class="post__upvotes">
            {{ post.data.ups }} upvote<span v-if="post.data.ups != 1">s</span>
          </span>
          <i class="fas fa fa-external-link"></i>
        </p>
      </div>
      <v-trigger @triggerIntersected="fetchMorePosts" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';
import LoadingIndicator from '@/components/LoadingIndicator.vue';
import VTrigger from '@/components/VTrigger.vue';

export default {
  name: 'Home',
  components: {
    LoadingIndicator,
    VTrigger,
  },
  mounted() {
    // dispatch an action that commits a mutation
    this.$store.dispatch('INITIAL_POST_FETCH');
  },
  computed: { ...mapState(['posts', 'isLoading']) },
  methods: {
    fetchMorePosts() {
      this.$store.dispatch('FETCH_MORE_POSTS');
    },
  },
};
</script>

<style lang="stylus" scoped>
.mosaic-container {
  // border: solid thin crimson;
  position: relative;
  z-index:10;
  display: grid;
  gap: 0.7rem 0.7rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-rows: 180px;
  z-index: 1;
  width: 100%;
  min-height: 400px;
  // margin-top: 5vh;
  background: var(--bg-color--primary);
  padding: 0 var(--padding-LR--global);
  padding-top: 3vh;

  .card {
    position: relative;
    transition: all 0.1 ease-in-out;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    border-radius: 0;

    // border: solid thin green;
    &:hover {
      transform: scale(1.02);
      z-index: 3000;
      // border-radius: 2rem;
    }

    @media screen and (min-width: 1200px) {
      &:nth-child(2n+4) {
        grid-row: span 2 / auto;
      }

      &:nth-child(2n+10) {
        grid-column: span 2 / auto;
        grid-row: span 2 / auto;
      }
    }

    @media screen and (min-width: 600px) {
      &:nth-child(2n+4) {
        grid-row: span 2 / auto;
      }
    }

    .img__container {
      position: relative;
      width: 100%;
      height: calc(100% - 30px);

      // border: solid thin brown;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -5;
        // visibility: hidden;
      }

      .backdrop-filter {
        position: absolute;
        z-index: 10;
        background: rgba(0, 0, 0, 0.1);
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        transition: all 0.1 ease-in-out;

        &:hover {
          background: rgba(0, 0, 0, 0);
        }
      }
    }

    .post-details {
      position: relative;
      width: 100%;
      min-height: 30px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 0.1em;
      color: var(--text-color--primary);
      line-height: 1.4;
      font-size: 0.7rem;
      font-weight: 700;

      // font-family: var(--font-family--alt)
      .post__upvotes {
        padding: 0 0.5em;
      }
    }
  }
}
</style>

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
        <img :src="post.data.thumbnail" alt="" />
        <div class="backdrop-filter"></div>
        <p class="upvotes"><i class="fas fa fa-thumbs-up"></i> {{ post.data.ups }}</p>
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
  display: grid;
  gap: 0.7rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-rows: 150px;
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 400px;
  // margin-top: 5vh;
  background: #eee;
  padding: 0 15%;
  padding-top: 3vh;

  .card {
    position: relative;
    transition: all 0.1 ease-in-out;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 0;

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

    .backdrop-filter {
      position: absolute;
      z-index: 10;
      background: rgba(0, 0, 0, 0.2);
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      transition: all 0.1 ease-in-out;

      &:hover {
        background: rgba(0, 0, 0, 0);
      }
    }

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

    .upvotes {
      position: absolute;
      z-index: 200;
      right: 5%;
      bottom: 5%;
      padding: 0.5em;
      border-radius: 0.6em;
      border: none;
      font-size: 1rem;
      color: #eee;
      line-height: 1;
      font-size: 0.7rem;
      background: rgba(0, 0, 0, 0.2);
      filter: opacity(0.9) drop-shadow(8px 8px 10px #111);
    }
  }
}
</style>

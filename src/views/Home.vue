<template>
  <div class="page">
    <div class="mosaic-container">
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
        <img :src="post.data.url" alt="" />
        <div class="backdrop-filter"></div>
        <p>Yo there</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';
// import axios from 'axios';

export default {
  name: 'Home',
  mounted() {
    // dispatch an action that commits a mutation
    this.$store.dispatch('fetchPosts');
  },
  computed: { ...mapState(['posts', 'loading']) },
  methods: {},
};
</script>

<style lang="stylus" scoped>
.mosaic-container {
  // border: solid thin crimson;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-rows: 150px;
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 400px;
  margin-top: 1em;
  background: #eee;

  .card {
    position: relative;
    border: solid thin #ccc;
    background: rgba(0,0,0,0.2);
    transition: all 0.15 ease-in-out;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &:hover {
      transform: scale(1.15);
      z-index: 3000;
    }

    @media screen and (min-width: 600px) {
      &:nth-child(2n+3) {
        grid-row: span 2 / auto;
      }

      &:nth-child(4n+7) {
        grid-row: span 2 / auto;
        grid-column: span 2 / auto;
      }

      &:nth-child(2n) ~ &:nth-child(n) {
        // stupid code
        border: solid thick crimson;
      }
    }

    .backdrop-filter {
      position: absolute;
      z-index: 10;
      background: rgba(0, 0, 0, 0.4);
      filter: blur(0.3rem);
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      transition: all 0.15 ease-in-out;

      &:hover{
      background: rgba(0, 0, 0, 0);
        filter: blur(0);
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

    p {
      position: relative;
      z-index: 200;
    }
  }
}
</style>

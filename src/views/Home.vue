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
        <img :src="post.data.thumbnail" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  mounted() {
    this.load();
  },
  data() {
    return { posts: [] };
  },
  methods: {
    load() {
      const url = 'https://www.reddit.com/r/photoshopbattles/new.json?sort=new&Limit=100';
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          this.posts = result.data.children;
        });
    },
  },
};
</script>

<style lang="stylus" scoped>
.mosaic-container {
  width: 100%;
  min-height: 400px;
  // border: solid thin crimson;
  margin-top: 1em;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-rows: 150px;

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid thin #ccc;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media screen and (min-width: 600px) {
      &:nth-child(2n+3) {
        grid-row: span 2 / auto;
      }

      &:nth-child(3n+3) {
        grid-row: span 2 / auto;
        grid-column: span 2 / auto;
      }

    }
  }
}
</style>

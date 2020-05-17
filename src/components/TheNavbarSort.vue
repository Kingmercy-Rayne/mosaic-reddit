<template>
  <ul class="the-navbar-sort">
    {{
      this.$store.state.targetSubreddit
    }}
  </ul>
</template>

<script>
export default {
  name: 'TheNavbarSort',
};
</script>

<style lang="stylus" scoped>
.the-navbar-sort {
  position: relative;
  min-height: 10vh;
  top: 10vh;
  padding: 1em;
  border: solid thin crimson;
  width: 100%;
  color: black;
}
</style>

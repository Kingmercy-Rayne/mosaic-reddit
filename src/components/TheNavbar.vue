<template>
  <nav class="nav">yo</nav>
</template>

<script>
export default {
  name: 'TheNavbar',
};
</script>

<style lang="stylus" scoped>
.nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;
  border: solid thin crimson;
  z-index: 10;
  background: linear-gradient(to right, #fff 40%, #eee);
}
</style>

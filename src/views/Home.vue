<template>
  <div class="page">
    <div class="mosaic-container"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
};
</script>

<style lang="stylus" scoped>
.mosaic-container {
  width: 100%;
  min-height: 800px;
  border: solid thin crimson;
  margin-top: 1em;
}
</style>

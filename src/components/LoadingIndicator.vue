<template>
  <section class="loading__view">
    <h1>LOADING...</h1>
  </section>
</template>

<script>
export default {
  name: 'LoadingIndicator',
};
</script>

<style lang="stylus" scoped>
.loading__view {
  flex-grow: 1;
  width: 100%;
  padding: 10em;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

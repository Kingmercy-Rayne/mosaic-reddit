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
  padding: 10em var(--padding-LR--global);
  display: flex;
  justify-content: center;
  align-items: center;
  // background: var(--bg-color--primary);
  background: transparent;
}
</style>

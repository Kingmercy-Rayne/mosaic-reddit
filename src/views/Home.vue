<template>
  <div class="page">
    <div class="mosaic-container">
      <div class="card">1</div>
      <div class="card card--wide">2</div>
      <div class="card">3</div>
      <div class="card card--mid">4</div>
      <div class="card card--tall">5</div>
      <div class="card">6</div>
      <div class="card card--wide">7</div>
      <div class="card">8</div>
    </div>
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
  min-height: 400px;
  border: solid thin crimson;
  margin-top: 1em;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 200px;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid thin #666;

  &:nth-child(2n+3) {
    grid-row: span 2 / auto;
  }

  &:nth-child(3n+1) {
    grid-row: span 2 / auto;
    grid-column: span 2 / auto;
  }
}
</style>

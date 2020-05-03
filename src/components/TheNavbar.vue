<template>
  <nav class="nav">
    <ul>
      <li><i class="fas fa fa-reddit fa-2x"></i></li>
      <li><i class="fas fa fa-search"></i></li>
      <li><i class="fas fa fa-arrow-down"></i></li>
    </ul>
  </nav>
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
  z-index: 10;
  background: linear-gradient(150deg, #B73A5D 20%, #534666);

  ul {
    display: flex;
    padding: 0.4em;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;

    li {
      padding: 0.4em;
      margin: 0 1em;
      border-radius: 50%;
      line-height: 0.5;
      transition: all 0.4 ease-in-out;
      color: #CDE0C9;
      opacity: 0.9;
      font-size: 1rem;

      &:hover {
        border: solid thin #888;
        opacity: 0.95;
        transform: scale(0.95);
      }

      &:nth-child(1) {
        color: black;
        background: #F9E07F;
        padding: 0;
      }

      &:nth-child(2) {
        margin-left: auto;
      }

      &:not(:nth-child(1)):hover {
        color: #eee;
      }
    }
  }
}
</style>

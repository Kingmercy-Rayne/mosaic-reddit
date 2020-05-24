<template>
  <li class="editors-pick__container">
    <i class="fas fa fa-th" @click="isChoiceListVisible = !isChoiceListVisible"></i>
    <ul v-if="isChoiceListVisible" v-on-clickaway="setChoiceListVisibilityOff" class="choices">
      <li>Holup</li>
      <li>Photoshop Battles</li>
      <li>Pics</li>
    </ul>
  </li>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  mixins: [clickaway],
  name: 'EditorsPick',
  data() {
    return {
      isChoiceListVisible: false,
    };
  },
  methods: {
    setChoiceListVisibilityOff() {
      this.isChoiceListVisible = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
.editors-pick__container {
  position: relative;

  .choices {
    position: absolute;
    top: 5vh;
    left: 50%;
    right: 50%;
    margin-top: 1em;
    padding: 4em;
    transform: translateX(-50%);
    background: #fff;
    -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
    border-radius: 3px;
    border: none;
  }
}
</style>

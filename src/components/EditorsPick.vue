<template>
  <li class="editors-pick__container" v-on-clickaway="setChoiceListVisibilityOff">
    <i class="fas fa fa-th" @click="isChoiceListVisible = !isChoiceListVisible"></i>
    <transition name="fade">
      <ul v-if="isChoiceListVisible" class="choices">
        <li v-for="(item, index) in editorsPick" :key="index" @click="visitSubreddit(index)">
          <span v-if="isThisActiveSubreddit(item)" class="active-subreddit"></span>
          <span class="subreddit-listing">{{ item }}</span>
        </li>
      </ul>
    </transition>
  </li>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import { mapState } from 'vuex';

export default {
  mixins: [clickaway],
  name: 'EditorsPick',
  data() {
    return {
      isChoiceListVisible: false,
    };
  },
  computed: {
    ...mapState(['editorsPick', 'lastVisitedSubreddit']),
  },
  methods: {
    setChoiceListVisibilityOff() {
      this.isChoiceListVisible = false;
    },
    visitSubreddit(index) {
      this.setChoiceListVisibilityOff();
      let target = this.editorsPick[index];
      // trim spaces in string
      target = target.replace(/\s+/g, '');
      this.$store.commit('CHANGE_TARGET_SUBREDDIT', target);
      this.$store.dispatch('FETCH_POSTS');
    },
    isThisActiveSubreddit(item) {
      // trim input
      const subreddit = item.replace(/\s+/g, '');
      // check if current index is active subreddit and add highlighter
      if (this.lastVisitedSubreddit === subreddit) {
        return true;
      }
      return 0;
    },
  },
};
</script>

<style lang="stylus" scoped>
.editors-pick__container {
  position: relative;
  padding: 0.4em;
  margin: 0 0.3em;
  padding: 0.5em;
  cursor: pointer;

  .choices {
    position: absolute;
    top: 7vh;
    // left: 50%;
    // right: 50%;
    // width: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0.8em 0.6em;
    padding-bottom: 1.8em;
    padding-left: 0;
    transform: translateX(-50%);
    background: #fff;
    -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
    border-radius: 3px;
    border: none;
    cursor: pointer;

    li {
      position: relative;
      width: 100%;
      display: flex;
      align-items: stretch;
      justify-content: flex-start;
      margin: 0;
      font-size: 0.8rem;
      font-weight: 400;
      text-align: left;
      white-space: nowrap;
      text-transform: capitalize;
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: scale(1.04);
      }

      .active-subreddit {
        position: relative;
        display: flex;
        padding: 0.2em;
        left: 0;
        height: auto;
        width: 0.1em;
        background: var(--border-color--alt);
      }

      .subreddit-listing {
        position: relative;
        display: flex;
        // border: solid thin green;
        padding: 1.2em 0;
        padding-right: 1.5em;
        padding-left: 1em;
        width: 100%;

        &:after {
          content: '';
          position: absolute;
          border-bottom: solid thin #999;
          bottom: 0;
          left: 0;
          right: 0;
          margin: 0 10%;
          opacity: 0.2;
        }
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>

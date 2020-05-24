<template>
  <span ref="trigger"></span>
</template>

<script>
export default {
  name: 'VTrigger',
  props: {
    options: {
      type: Object,
      // TODO: rsolve object vs function case for "default"
      // eslint-disable-next-line
      default: () => {
        return {
          // root = reference object; defaults to viewport if null
          root: null,
          // threshold = range[0,1]; percentage of target's visibility before execution
          // 0 = as early as 1px, 1 = entire element
          threshold: '0',
        };
      },
    },
  },
  data() {
    return {
      // placeholder for observer
      observer: null,
    };
  },
  mounted() {
    // IntersectionObserver inits with 3 arguements
    // entries = blah
    // callback = function to be fired when the specified threshold is passed
    // options = observer options
    this.observer = new IntersectionObserver((entries) => {
      this.handleIntersect(entries[0]);
    }, this.options);

    // attach observer to component
    this.observer.observe(this.$refs.trigger);
  },
  destroyed() {
    //   stop watching Trigger-component
    this.observer.disconnect();
  },
  methods: {
    // emit event on intersection
    handleIntersect(entry) {
      if (entry.isIntersecting) this.$emit('triggerIntersected');
    },
  },
};
</script>

<style lang="stylus" scoped></style>

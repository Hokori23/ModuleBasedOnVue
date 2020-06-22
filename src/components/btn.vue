<template>
  <button :class="contentClass">
    <!-- prepend -->
    <div class="mx-sm">
      <i :class="icons.prepend"></i>
    </div>
    <!-- default -->
    <div v-if="$slots.default">
      <slot></slot>
    </div>
    <!-- append -->
    <div></div>
  </button>
</template>
<script>
export default {
  props: {
    round: Boolean,
    rounded: Boolean,
    flat: Boolean,
    outline: {
      type: Boolean,
      default: true
    },
    uppercase: {
      type: Boolean,
      default: true
    },
    capitalize: {
      type: Boolean,
      default: false
    },
    float: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "primary"
    },
    textColor: {
      type: String,
      default: "white"
    },
    prepend: String,
    append: String
  },
  name: "h-btn",
  computed: {
    contentClass() {
      return {
        "h-btn": true,
        "h-btn_round": this.round,
        "h-btn_rounded": this.rounded && !this.round,
        "h-btn_flat": this.flat,
        "h-btn_outline": this.outline && this.flat,
        "h-btn_uppercase": this.uppercase && !this.capitalize,
        "h-btn_capitalize": this.capitalize,
        "h-btn_empty": !Boolean(this.$slots.default),
        [`h-btn_${this.color}`]: this.color,
        [`text_${this.textColor}`]: this.textColor
      };
    },
    icons() {
      return {
        prepend: `fab h-icon fa-${this.prepend}`,
        append:`fab h-icon fa-${this.append}`,
      };
    }
  },
  mounted() {
    console.log(this.$slots);
  }
};
</script>
<style lang="sass">
</style>
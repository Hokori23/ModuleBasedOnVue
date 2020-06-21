<template>
  <button :class="classObject">
    <div>
      <slot></slot>
    </div>
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
    color: {
      type: String,
      default: "primary"
    },
    textColor: {
      type: String,
      default: "white"
    },
    float: {
      type: Boolean,
      default: false
    }
  },
  name: "h-btn",
  computed: {
    classObject() {
      let obj = {
        "h-btn": true,
        "h-btn_round": this.round,
        "h-btn_rounded": this.rounded && !this.round,
        "h-btn_flat": this.flat,
        "h-btn_outline": this.outline && this.flat,
        "h-btn_uppercase": this.uppercase && !this.capitalize,
        "h-btn_capitalize": this.capitalize,
        "h-btn_empty": !Boolean(this.$slots.default)
      };
      this.color && (obj[this.temColor] = true);
      this.textColor && (obj[this.temTextColor] = true);
      return obj;
    },
    temColor() {
      return `h-btn_${this.color}`;
    },
    temTextColor() {
      return `text_${this.textColor}`;
    }
  },
  mounted() {}
};
</script>
<style lang="sass">
</style>
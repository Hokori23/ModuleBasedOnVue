<template>
  <div class="home">
    <div class="block absolute_right_top"></div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      position: [
        "position_bottom",
        "position_center_bottom",
        "position_left_bottom",
        "position_right_bottom"
      ]
    };
  }
};
</script>
<style lang="sass" scoped>
.home
  width: 100%
  height: 100%

.block
  background-color: red
  width: 50px
  height: 50px
</style>
<template>
  <section class="home mt_md">
    <div class="text_center text_primary">404内部使用</div>
    <section class="row jus_center mt_md">
      <!-- <ul>
        <li>
          <router-link to="/style">Style</router-link>
        </li>
        <li>
          <router-link to="/components">Components</router-link>
        </li>
      </ul> -->
    </section>
    <div class="display">
      <h-btn flat outline color="secondary" text-color="black">button</h-btn>
      <h-btn outline rounded color="warning">button</h-btn>
      <h-btn capitalize color="primary">button</h-btn>
      <h-btn rounded color="negative"></h-btn>
    </div>
    <!-- <router-view /> -->
  </section>
</template>

<script>
import hBtn from "@/components/btn";
export default {
  name: "HomeLayout",
  mounted() {
    console.log("homeLayout", this.$router.options.routes);
  },
  components: {
    hBtn
  }
};
</script>
<style lang="sass" scoped>
.home
  width: 100%
  min-height: 100%

.display
  button
    margin-left: 20px
</style>
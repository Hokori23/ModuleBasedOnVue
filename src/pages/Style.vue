<template>
  <section>
    Style
    <router-view />
  </section>
</template>
<script>
export default {
  name: "style",
  mounted() {
    console.log("style");
  }
};
</script>
<template>
  <section>
    StyleLayout
    <router-view />
  </section>
</template>
<script>
export default {
  name: "StyleLayout",
  mounted() {
    console.log("style layout");
  }
};
</script>
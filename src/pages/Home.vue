<template>
  <section class="home mt_md">
    <div>home</div>
    <router-view />
  </section>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home"
};
</script>
<style lang="sass" scoped>
.home
  width: 100%
  min-height: 100%
</style>
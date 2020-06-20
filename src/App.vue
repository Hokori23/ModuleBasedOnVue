<template>
  <div id="app" class="px_sm gt-sm">
    <div
      class="
      row
      wrap
      flex_center 
      text_secondary 
      text_center 
      unselectable 
      animate__animated 
      animate__fadeIn 
      pt_xl"
    >
      <h2 class='px_md'>404</h2>
      <h2 class='px_md'>hokori.sass</h2>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",
  mounted() {
  }
};
</script>
<style lang="sass">
#app
  width: 100%
  height: 100%
</style>

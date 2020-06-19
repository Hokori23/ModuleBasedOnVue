<template>
  <div class="home bg-secondary">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  mounted() {
    console.log(this.$store);
  }
};
</script>
<style lang="sass" scoped>
</style>
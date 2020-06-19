<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
</script>
<style lang="sass">
body,html
  width: 100%
  height: 100%
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  width: 100%
  height: 100%

#nav
  padding: 30px
  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
</style>

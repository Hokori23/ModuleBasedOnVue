<template>
  <section class="home mt_md">
    <div class="text_center text_primary">404内部使用</div>
    <section class="row jus_center mt_md">
      <ul>
        <li v-for="(item,i) of list" :key="'home_list_'+i">
          {{item.name}}
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  computed: {
    list() {
      return this.$router.options.routes[0].children;
    }
  }
};
</script>
<style lang="sass" scoped>
.home
  width: 100%
  min-height: 100%
</style>
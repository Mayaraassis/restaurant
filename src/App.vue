<template>
  <div id="app">
    <category-menu />
  </div>
</template>

<script>
import CategoryMenu from './components/CategoryMenu.vue';

export default {
  name: "App",
  components: {
    CategoryMenu,
  },
};
</script>

<style>
#app {
}
</style>

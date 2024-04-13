<template>
  <div class="home">
    <CategoryMenu />
    <items-list />
  </div>
</template>

<script>
import CategoryMenu from "@/components/CategoryMenu.vue";
import ItemsList from "@/components/ItemsList.vue";

export default {
  name: "HomeView",
  components: {
    CategoryMenu,
    ItemsList,
  },
};
</script>
<style scoped lang="less">
.home {
  display: flex;

  @media @smartphones {
    flex-direction: column;
  }
}
</style>

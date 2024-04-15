<template>
  <div class="home">
    <CategoryMenu />
    <items-list />
    <cart-component/>
  </div>
</template>

<script>
import CategoryMenu from "@/components/CategoryMenu.vue";
import ItemsList from "@/components/ItemsList.vue";
import CartComponent from "@/components/CartComponent.vue";

export default {
  name: "HomeView",
  components: {
    CategoryMenu,
    ItemsList,
    CartComponent
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

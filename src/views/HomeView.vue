<template>
  <div class="home">
    <CategoryMenu />
    <items-list />
    <cart-component v-if="isDesktop()"/>
  </div>
</template>

<script>
import CategoryMenu from "@/components/CategoryMenu.vue";
import ItemsList from "@/components/ItemsList.vue";
import CartComponent from "@/components/CartComponent.vue";
import Mixin from '@/mixins/mixins.js'

export default {
  name: "HomeView",
  components: {
    CategoryMenu,
    ItemsList,
    CartComponent
  },
  mixins: [Mixin]
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

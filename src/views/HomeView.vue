<template>
  <div class="home">
    <router-link to="/cart" class="cart--icon" v-if="!isDesktop()">
      <CartIcon />
    </router-link>
    <CategoryMenu />
    <items-list />
    <cart-component v-if="isDesktop()" />
  </div>
</template>

<script>
import CategoryMenu from "@/components/CategoryMenu.vue";
import ItemsList from "@/components/ItemsList.vue";
import CartComponent from "@/components/CartComponent.vue";
import Mixin from "@/mixins/mixins.js";
import CartIcon from "@/assets/icons/cart.svg";

export default {
  name: "HomeView",
  components: {
    CategoryMenu,
    ItemsList,
    CartComponent,
    CartIcon,
  },
  mixins: [Mixin],
};
</script>
<style scoped lang="less">
.home {
  display: flex;

  .cart--icon {
    width: 42px;
    height: 42px;
    background: @pink;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 20px 20px auto;
  }

  @media @smartphones {
    flex-direction: column;
  }
}
</style>

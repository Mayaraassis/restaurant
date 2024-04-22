<template>
  <div class="cart">
    <router-link to="/" class="cart--go-back" v-if="!isDesktop()"
      >←️ Voltar</router-link
    >
    <h2 class="cart--title">Seu pedido</h2>
    <p v-if="!hasItems">Seu carrinho ainda está vazio</p>
    <transition-group name="list">
      <CartItem v-for="item in cartList" :key="item.id" :item="item" />
    </transition-group>
    <div class="cart--total" v-if="hasItems">
      <span>Total: </span>
      <span class="price">{{ getCartTotal | currency }}</span>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem.vue";
import { mapGetters } from "vuex";
import Mixin from "@/mixins/mixins.js";
export default {
  name: "CartComponent",
  components: {
    CartItem,
  },
  mixins: [Mixin],
  filters: {
    currency(value) {
      return `R$ ${value.toLocaleString("pt-br", {
        minimumFractionDigits: 2,
      })}`;
    },
  },
  computed: {
    ...mapGetters(["getCartTotal"]),
    cartList() {
      return this.$store.state.cartList;
    },
    hasItems() {
      return this.cartList.length;
    },
  },
};
</script>

<style lang="less" scoped>
.cart {
  background: white;
  width: 643px;
  min-width: 643px;
  padding: 50px 20px;

  &--go-back {
    font-weight: 600;
    font-size: 18px;
    padding: 10px;
    text-decoration: none;
    color: black;
  }

  &--title {
    font-weight: 600;
    font-size: 24px;
  }

  &--total {
    font-weight: 600;
    font-size: 18px;
    text-align: right;
    margin-top: 30px;

    .price {
      color: @yellow;
      padding-left: 10px;
    }
  }
  .list-enter-active,
  .list-leave-active {
    transition: all 1s;
  }
  .list-enter,
  .list-leave-to {
    opacity: 0;
    transform: translateX(-30px);
  }
  @media @smartphones {
    width: 100%;
    min-width: unset;
    padding: 50px 20px 20px;
  }
}
</style>

<template>
  <div class="item">
    <quantity-component :item="item" class="item--quantity" />
    <div class="item--img-container">
      <img class="item--img" :src="imagePath" />
    </div>
    <div class="content">
      <h3 class="item--name">{{ item.name }}</h3>
      <a class="item--observation">Adicionar Observação</a>
    </div>
    <p class="item--price">{{ item.price | currency }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import QuantityComponent from "./QuantityComponent.vue";
export default {
  name: "CartItem",
  components: {
    QuantityComponent,
  },
  props: {
    item: {},
  },
  filters: {
    currency(value) {
      return `R$ ${value.toLocaleString("pt-br", {
        minimumFractionDigits: 2,
      })}`;
    },
  },
  computed: {
    imagePath() {
      return require(`@/assets/images/${this.item.id}.png`);
    },
  },
  methods: {
    ...mapActions(["increaseQuantity", "decreaseQuantity"]),
  },
};
</script>

<style lang="less" scoped>
.item {
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid @light-grey;

  &--quantity {
    display: flex;
    align-items: center;
    padding-right: 40px;

    .number {
      font-weight: 500;
      font-size: 18px;
      color: @yellow;
      width: 28px;
      text-align: center;
    }

    .buttons {
      font-weight: 600;
      font-size: 18px;
      cursor: pointer;
      background: none;
      border: none;
    }
  }

  &--img-container {
    width: 81px;
    height: 61px;
    border-radius: 8px;
    background: @light-yellow;
    display: flex;
    align-items: center;
  }

  &--img {
    width: 65px;
    display: block;
    margin: auto;
  }

  &--name {
    font-weight: 600;
    font-size: 18px;
    margin: 0;
  }

  &--observation {
    font-weight: 500;
    font-size: 12px;
    color: @dark-grey;
    text-decoration: underline;
  }

  &--price {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: @yellow;
  }

  .content {
    flex-grow: 1;
    padding: 0 20px;
  }

  @media @smartphones {
    flex-wrap: wrap;

    &--img-container {
      order: 1;
    }

    .content {
      order: 2;
    }

    &--quantity {
      order: 3;
      padding: 0;
      width: 81px;
      justify-content: center;
    }

    &--price {
      order: 4;
      padding: 0 20px;
      margin: 5px 0;
    }
  }
}
</style>

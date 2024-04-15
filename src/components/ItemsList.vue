<template>
  <div class="items-list">
    <loading-component v-if="isLoading" />
    <ItemComponent v-for="item in itemsList" :key="item.id" :item="item" />
  </div>
</template>

<script>
import axios from "axios";
import ItemComponent from "@/components/ItemComponent.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
export default {
  name: "ItemsList",
  components: {
    ItemComponent,
    LoadingComponent,
  },
  data() {
    return {
      itemsList: [],
      isLoading: false,
    };
  },
  created() {},
  computed: {
    selectedCategory: {
      get() {
        return this.$store.state.selectedCategory;
      },
    },
  },
  methods: {
    getItemsList() {
      this.isLoading = true;
      this.itemsList = [];
      setTimeout(() => {
        axios
          .get(`http://localhost:3000/${this.selectedCategory}`)
          .then((response) => {
            this.itemsList = response.data;
            this.isLoading = false;
          });
      }, 2000);
    },
  },
  watch: {
    selectedCategory() {
      this.getItemsList();
    },
  },
};
</script>

<style scoped lang="less">
.items-list {
  margin: 50px;
  display: flex;
  width: 100%;
  @media @smartphones {
    flex-wrap: wrap;
    margin: 20px;
  }
}
</style>

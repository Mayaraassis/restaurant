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
  created() {
    this.getItemsList()
  },
  computed: {
    selectedCategory() {
        return this.$store.state.selectedCategory;
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
      }, 500);
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
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  @media @smartphones {
    flex-wrap: wrap;
    margin: 0;
    padding: 20px;
  }
}
</style>

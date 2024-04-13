<template>
  <div class="items-list">
    <ItemComponent v-for="item in itemsList" :key="item.id" :item="item"/>
  </div>
</template>

<script>
import axios from 'axios';
import ItemComponent from '@/components/ItemComponent.vue'
export default {
    name: 'ItemsList',
    components: {
        ItemComponent
    },
    data(){
        return{
            itemsList: []
        }
    },
    created(){
    axios.get('http://localhost:3000/burguers').then(response => {
      this.itemsList = response.data;
    })
  }
}
</script>

<style scoped lang="less">
.items-list{
    margin: 50px;
    display: flex;

    @media @smartphones {
        flex-wrap: wrap;
        margin: 20px;
    }
}
</style>
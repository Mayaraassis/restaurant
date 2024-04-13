<template>
  <div class="home">
    <CategoryMenu/>
  </div>
</template>

<script>
import CategoryMenu from '@/components/CategoryMenu.vue'

export default {
  name: 'HomeView',
  components: {
    CategoryMenu
  }
}
</script>

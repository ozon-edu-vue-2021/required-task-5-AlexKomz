<template>
  <ul v-if="products.length" class="list">
    <li v-for="product of products" :key="product.id">
      <CardItem :product="product" />
    </li>
  </ul>
  <div v-else class="nothing">Товаров нет!</div>
</template>

<script>
import CardItem from "./CardItem";
export default {
  name: "CardList",
  components: { CardItem },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  margin: 0;
  padding: 20px;
  list-style: none;
}

.nothing {
  text-align: center;
  padding: 50px 0;
}
</style>

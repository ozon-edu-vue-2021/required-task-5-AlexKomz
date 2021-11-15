<template>
  <ul v-if="products.length" class="list">
    <li v-for="product of products" :key="product.id">
      <BasketItem :product="product" />
    </li>
  </ul>
  <div v-else class="nothing">Товаров нет!</div>
</template>

<script>
import BasketItem from "./BasketItem";

export default {
  name: "BasketList",
  components: { BasketItem },
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
  flex-direction: column;
  gap: 24px;

  margin: 0;
  padding: 20px;
  list-style: none;
}

.nothing {
  text-align: center;
  padding: 50px 0;

  flex-grow: 1;
}
</style>

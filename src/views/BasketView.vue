<template>
  <div class="basket">
    <BasketList :products="products" />
    <div class="basket__info">
      <span class="basket__value">
        Количество товаров: <span>{{ count }}</span>
      </span>
      <span class="basket__value">
        Общая стоимость: <span>{{ totalCost }}</span>
      </span>
      <button class="basket__button" @click="clickHandler">
        Оформить заказ
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import BasketList from "../components/BasketList";
import { GET_COUNT, GET_TOTAL_COST } from "@/consts";

export default {
  name: "BasketView",
  components: { BasketList },
  computed: {
    ...mapState({ products: (state) => state.basket.basket }),
    ...mapGetters({
      count: GET_COUNT,
      totalCost: GET_TOTAL_COST,
    }),
  },
  methods: {
    clickHandler() {
      const basketData = this.products.map(
        (product) => `${product.title} ${product.price}₽ X ${product.count}`
      );
      basketData.push(`\nВсего: ${this.totalCost}₽`);
      alert(basketData.join("\n"));
    },
  },
};
</script>

<style scoped>
.basket {
  display: flex;
  justify-content: space-between;
}

.basket__info {
  padding: 24px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  min-width: 250px;
}

.basket__value {
  display: flex;
  justify-content: space-between;
}

.basket__button {
  align-self: center;
}
</style>

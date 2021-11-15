<template>
  <div class="card">
    <img
      class="card__image"
      :src="require(`../assets/images/${product.image}.webp`)"
      :alt="product.title"
    />
    <span class="card__price">{{ product.price }} &#8381;</span>
    <h5 class="card__title">{{ product.title }}</h5>
    <label class="card__favorite">
      <input
        :checked="product.isFavorite"
        type="checkbox"
        @change="changeHandler"
      />
      В избранном
    </label>
    <label class="card__count">
      <input min="1" v-model="count" type="number" />
    </label>
    <button class="card__button" @click="addToBasketHandler">В корзину</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { ADD_TO_BASKET, TOGGLE_FAVORITE_PRODUCT } from "@/consts";

export default {
  data: () => ({
    count: 1,
  }),
  name: "CardItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations({
      toggleFavoriteProduct: TOGGLE_FAVORITE_PRODUCT,
      addToBasket: ADD_TO_BASKET,
    }),
    changeHandler() {
      this.toggleFavoriteProduct(this.product.id);
    },
    addToBasketHandler() {
      this.addToBasket({ ...this.product, count: Number(this.count) });
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 4px;

  max-width: 250px;
}

.card__image {
  width: 250px;
  height: auto;
}

.card__price {
  font-weight: bold;
}

.card__title {
  margin: 0;
}

.card__count {
  width: 50px;
}

.card__favorite input {
  margin: 0;
}

.card__count input {
  width: 100%;
}

.card__button {
  align-self: flex-start;
}
</style>

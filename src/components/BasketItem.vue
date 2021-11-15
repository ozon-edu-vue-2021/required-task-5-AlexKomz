<template>
  <div class="item">
    <img
      class="item__image"
      :src="require(`../assets/images/${product.image}.webp`)"
      :alt="product.title"
    />
    <div class="item__info">
      <h5 class="item__title">{{ product.title }}</h5>
      <span class="item__price">{{ product.price }} &#8381;</span>
    </div>
    <div class="item__wrapper">
      <label class="item__count">
        <input
          min="1"
          :value="product.count"
          type="number"
          @input="inputHandler"
        />
      </label>
      <button class="item__button" @click="removeClickHandler">Удалить</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { CHANGE_ITEM_COUNT, REMOVE_FROM_BASKET } from "@/consts";

export default {
  name: "BasketItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations({
      removeFromBasket: REMOVE_FROM_BASKET,
      changeItemCount: CHANGE_ITEM_COUNT,
    }),
    removeClickHandler() {
      this.removeFromBasket(this.product);
    },
    inputHandler(event) {
      const value = Number(event.target.value);
      this.changeItemCount({ id: this.product.id, count: value });
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  min-width: 700px;
}

.item__info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.item__image {
  width: 150px;
  height: auto;
}

.item__price {
  font-weight: bold;
}

.item__wrapper {
  display: flex;
  gap: 5px;
}

.item__title {
  margin: 0;
  max-width: 250px;
}

.item__count {
  align-self: flex-start;
  width: 50px;
}

.item__count input {
  width: 100%;
}

.item__button {
  align-self: flex-start;
}
</style>

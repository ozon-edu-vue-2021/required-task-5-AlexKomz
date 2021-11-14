<template>
  <CardList :products="products" />
</template>

<script>
import { mapState } from "vuex";
import CardList from "../components/CardList";

export default {
  name: "ProductsView",
  components: { CardList },
  computed: {
    ...mapState({ products: (state) => state.products.products }),
  },
};
</script>

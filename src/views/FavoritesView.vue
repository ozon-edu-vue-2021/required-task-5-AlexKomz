<template>
  <CardList :products="favoriteProducts" />
</template>

<script>
import { mapGetters } from "vuex";
import CardList from "../components/CardList";
import { GET_FAVORITE_PRODUCTS } from "@/consts";

export default {
  name: "FavoritesView",
  components: { CardList },
  computed: {
    ...mapGetters({ favoriteProducts: GET_FAVORITE_PRODUCTS }),
  },
};
</script>

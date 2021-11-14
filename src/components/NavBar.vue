<template>
  <nav class="navigation">
    <div class="wrapper">
      <RouterLink class="navigation__link" to="/" exact> Товары </RouterLink>
      <RouterLink class="navigation__link" to="/favorites" exact>
        Избранное
      </RouterLink>
    </div>
    <RouterLink class="navigation__link" to="/basket" exact>
      Корзина ({{ count }})
    </RouterLink>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import { GET_COUNT } from "../consts";

export default {
  name: "NavBar",
  computed: {
    ...mapGetters({
      count: GET_COUNT,
    }),
  },
};
</script>

<style scoped>
.navigation {
  display: flex;
  justify-content: space-between;

  padding: 20px;

  background-color: #000;
}

.wrapper {
  display: flex;
  gap: 10px;
}

.navigation__link {
  position: relative;

  color: #fff;
  text-decoration: none;
}

.navigation__link_active:after {
  content: "";

  position: absolute;
  bottom: -8px;
  left: 0;

  width: 100%;

  border-bottom: 2px solid #fff;
}
</style>

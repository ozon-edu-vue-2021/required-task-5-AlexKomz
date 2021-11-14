import { getRandomImageName, getRandomInt } from "../../helper";
import {
  GET_FAVORITE_PRODUCTS,
  LOADING,
  SET_PRODUCTS,
  TOGGLE_FAVORITE_PRODUCT,
} from "../../consts";

const URL = "https://random-data-api.com/api/food/random_food?size=30";

export const products = {
  namespace: true,

  state: () => ({
    products: [],
  }),
  getters: {
    [GET_FAVORITE_PRODUCTS]: (state) =>
      state.products.filter((product) => product.isFavorite),
  },
  mutations: {
    [SET_PRODUCTS]: (state, payload) => {
      state.products = payload;
    },
    [TOGGLE_FAVORITE_PRODUCT]: (state, payload) => {
      const product = state.products.find((product) => product.id === payload);
      product.isFavorite = !product.isFavorite;
    },
  },
  actions: {
    [LOADING]: async (context) => {
      const data = await fetch(URL);
      const json = await data.json();

      context.commit(
        SET_PRODUCTS,
        json.map((item) => {
          return {
            id: item.id,
            image: getRandomImageName(),
            title: item.dish,
            price: getRandomInt({ from: 1, to: 99 }),
            isFavorite: false,
          };
        })
      );
    },
  },
};

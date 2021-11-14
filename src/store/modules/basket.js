import {
  ADD_TO_BASKET,
  CHANGE_ITEM_COUNT,
  GET_COUNT,
  GET_TOTAL_COST,
  REMOVE_FROM_BASKET,
} from "../../consts";

export const basket = {
  namespace: true,

  state: () => ({
    basket: [],
  }),
  getters: {
    [GET_COUNT]: (state) => {
      return state.basket.reduce((count, item) => {
        count += item.count;
        return count;
      }, 0);
    },
    [GET_TOTAL_COST]: (state) => {
      return state.basket.reduce((cost, item) => {
        cost += item.price * item.count;
        return cost;
      }, 0);
    },
  },
  mutations: {
    [CHANGE_ITEM_COUNT]: (state, payload) => {
      const found = state.basket.find((item) => item.id === payload.id);

      if (found) {
        found.count = payload.count;
      }
    },
    [ADD_TO_BASKET]: (state, payload) => {
      const found = state.basket.find((item) => item.id === payload.id);

      if (found) {
        found.count += payload.count;
      } else {
        state.basket = [...state.basket, payload];
      }
    },
    [REMOVE_FROM_BASKET]: (state, payload) => {
      const foundIndex = state.basket.findIndex(
        (item) => item.id === payload.id
      );

      if (foundIndex > -1) {
        state.basket = [
          ...state.basket.slice(0, foundIndex),
          ...state.basket.slice(foundIndex + 1),
        ];
      }
    },
  },
};

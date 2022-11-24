import { createSlice } from "@reduxjs/toolkit";

export const restaurantSlice = createSlice({
  name: "basket",
  initialState: {
    restaurant: {
      id: null,
      imgUrl: null,
      title: null,
      rating: null,
      gener: null,
      address: null,
      shortDescription: null,
      dishes: null,
    },
  },
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurent = (state) => state.restaurant.restaurant;

export default restaurantSlice.reducer;

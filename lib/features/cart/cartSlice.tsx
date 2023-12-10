import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      name: "Nike Air Max 2019",
      model: "36EU - 4US",
      price: 259,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Nike Air Max 2018",
      model: "36EU - 4US",
      price: 259,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Nike Air Max 2017",
      model: "36EU - 4US",
      price: 259,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ],
  totalQuantity: 3,
  amount: 777,
};

const cartSlice = createSlice({
  initialState: initialState,
  name: "cart",
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.name === newItem.name
      );
      state.totalQuantity++;
      state.amount += newItem.price;
      if (!existingItem) {
        state.items.push({
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          model: newItem.model,
          image: newItem.image,
        });
      } else {
        existingItem.quantity++;
      }
    },
    removeItemFromCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.name === action.payload.name
      );
      state.totalQuantity--;
      state.amount -= action.payload.price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.name !== action.payload.name
        );
      } else {
        existingItem.quantity--;
      }
    },
    removeAllItemsOfThisTypeFromCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.name === action.payload.name
      );
      state.totalQuantity -= existingItem.quantity;
      state.amount -= existingItem.price * existingItem.quantity;
      state.items = state.items.filter(
        (item) => item.name !== action.payload.name
      );
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  removeAllItemsOfThisTypeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;

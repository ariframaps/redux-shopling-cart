import { createSlice } from "@reduxjs/toolkit";

let cartList = [];
const localCart = JSON.parse(localStorage.getItem("localCart"));
localCart ? cartList = localCart : cartList = [];

let total = 0
cartList.forEach(item => {
    total += item.price
})

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList,
        total
    },
    reducers: {
        add(state, action) {
            const newCart = state.cartList.concat(action.payload);
            const newTotal = state.total + action.payload.price
            return { ...state, total: newTotal, cartList: newCart }
        },
        remove(state, action) {
            const newCart = state.cartList.filter(item => item.id !== action.payload.id)
            const newTotal = state.total - action.payload.price
            return { ...state, total: newTotal, cartList: newCart }
        }
    }
})

export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
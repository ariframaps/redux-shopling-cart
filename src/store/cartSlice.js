import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: [],
        total: 0
    },
    reducers: {
        add(state, action) {
            const newCart = state.cartList.concat(action.payload);
            const newTotal = state.total + action.payload.price
            console.log(newCart);
            return { ...state, total: newTotal, cartList: newCart }
        },
        remove(state, action) {
            const newCart = state.cartList.filter(item => item.id !== action.payload.id)
            const newTotal = state.total - action.payload.price
            console.log(newCart);
            return { ...state, total: newTotal, cartList: newCart }
        }
    }
})

export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
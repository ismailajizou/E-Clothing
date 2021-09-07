import { useReducer } from "react";

const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
            );
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}];
};

const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity - 1} 
        : cartItem
        );
}

export const cartActionTypes = {
    TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    CLEAR_ITEM_FROM_CART: 'CLEAR_ITEM_FROM_CART'
}

function cartReducer(state, action){
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
            case cartActionTypes.ADD_ITEM:
                return {
                    ...state,
                    totalPrice: state.totalPrice + action.payload.price,
                    count: state.count + 1,
                    cartItems: addItemToCart(state.cartItems, action.payload)
                };
            case cartActionTypes.REMOVE_ITEM: 
                return {
                    ...state,
                    totalPrice: state.totalPrice - action.payload.price,
                    count: state.count - 1,
                    cartItems: removeItemFromCart(state.cartItems, action.payload)
                };
            case cartActionTypes.CLEAR_ITEM_FROM_CART: 
                return{
                    ...state,
                    totalPrice: state.totalPrice - action.payload.price * action.payload.quantity,
                    count: state.count - action.payload.quantity,
                    cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
                };
        default:
            return state;
    }
}

export default function useCartReducer() {
    const [state, dispatch] = useReducer(cartReducer, { hidden: true, cartItems: [], count: 0, totalPrice: 0 });
    return [ {...state}, dispatch ];
}
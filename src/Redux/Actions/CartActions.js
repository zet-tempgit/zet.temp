import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../Constants/CartConstants";


// Add to Cart


export const addToCart = (id,qty) => async (dispatch,getState) => {
    const {data} = await axios.get(`/api/products/${id}`);

    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            product:data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty,
        },
    });

    localStorage.getItem("cartItems", JSON.stringify(getState().cart.cartItems))
};


// remove products from cart

export const removefromcart = (id) => (dispatch,getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    })

    localStorage.getItem("cartItems", JSON.stringify(getState().cart.cartItems))
}
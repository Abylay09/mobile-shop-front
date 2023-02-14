import { useState, useEffect, createContext, useContext } from 'react'

const CartContext = createContext();


const CartProvider = ({ children }) => {


    const addToCart = (id) => {
        if (localStorage.getItem("cart")) {
            let prevArr = JSON.parse(localStorage.getItem("cart"));
            prevArr.push(id)
            localStorage.setItem("cart", JSON.stringify([...new Set(prevArr)]));
        } else {
            localStorage.setItem("cart", JSON.stringify([id]));
        }
        window.dispatchEvent(new Event("storage"));
    }

    const deleteItem = (id) => {
        let prevArr = JSON.parse(localStorage.getItem("cart"));
        let newArr = prevArr.filter(itemId => itemId != id)
        localStorage.setItem("cart", JSON.stringify([...new Set(newArr)]));
        window.dispatchEvent(new Event("storage"));
    }


    const values = { addToCart, deleteItem }

    return <CartContext.Provider value={values}> {children} </CartContext.Provider>
}

const useCart = () => useContext(CartContext);

export { useCart, CartProvider }
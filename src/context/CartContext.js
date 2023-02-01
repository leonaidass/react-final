import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
const init = JSON.parse(localStorage.getItem('cart')) || []
export const CardProvider = ({ children }) => {
  const [cart, setCart] = useState(init);
  console.log("carrito", cart);
  const agragarCarrito = (item) => {
    setCart([...cart, item]);
  };
  const isInCart = (id) => {
    return cart.some((elem) => elem.id === id);
  };
  const deleteCart = () => {
    setCart([]);
  };
  const totalCart = () => {
    return cart.reduce((acc, elem) => {
      return (acc = acc + elem.precio * elem.cantidad);
    }, 0);
  };
  const deleteItem = (id) => {
    setCart(cart.filter((elem) => elem.id !== id));
  };
  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])
  return (
    <CartContext.Provider
      value={{
        cart,
        agragarCarrito,
        isInCart,
        deleteCart,
        totalCart,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    let exist = cart.some((element) => element.id === id);
    return exist;
  };

  const addToCart = (product) => {
    let existe = isInCart(product.id);
    if (existe) {
      let newChanges = cart.map((element) => {
        if (element.id === product.id) {
          return { ...element, quantity: element.quantity + product.quantity };
        } else {
          return element;
        }
      });
      setCart(newChanges);
    } else {
      setCart([...cart, product]);
    }
  };
  const clearCart = () => {
    setCart([]);
  };

  const removeByID = (id)=>{
   let newChanges = cart.filter((element)=> element.id !== id)
   setCart(newChanges)
  }

  let data = {
    cart,
    addToCart,
    clearCart,
    removeByID
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;

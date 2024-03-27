import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const isInCart = (id) => {
    let exist = cart.some((element) => element.id === id);
    return exist;
  };

  const addToCart = (product) => {
    let existe = isInCart(product.id);
    if (existe) {
      let newChanges = cart.map((element) => {
        if (element.id === product.id) {
          return { ...element, quantity: product.quantity };
        } else {
          return element;
        }
      });
      setCart(newChanges);
      localStorage.setItem("cart", JSON.stringify(newChanges));
    } else {
      setCart([...cart, product]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
    }
  };
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart")
  };

  const removeByID = (id) => {
    let newChanges = cart.filter((element) => element.id !== id);
    setCart(newChanges);
    localStorage.setItem("cart", JSON.stringify(newChanges));
  };

  const getTotalItems = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.quantity;
    }, 0);
    return total;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.quantity * element.price;
    }, 0);
    return total;
  };

  const getTotalQuantityById = (id) => {
    let product = cart.find((element) => element.id === id);
    if (product) {
      return product.quantity;
    } else {
      return product;
    }
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    removeByID,
    getTotalItems,
    getTotalPrice,
    getTotalQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;

import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  CartDetailContainer,
  ItemDetalContainer,
  ItemListContainer,
} from "./components/pages";
import Layout from "./components/layout/Layout";
import CartContextProvider from "./components/context/CartContext";

function App() {
  return (
    <>
      <BrowserRouter>
      <CartContextProvider>

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetalContainer />} />
            <Route path="/cart" element={<CartDetailContainer />} />
          </Route>
            <Route path="*" element={<h1>404 not found....pendiente crear page</h1>} />
        </Routes>

        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

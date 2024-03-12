import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  ItemDetalContainer,
  ItemListContainer,
  ShoppingCarContainer,
} from "./components/pages";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetalContainer />} />
            <Route path="/shopingCar" element={<ShoppingCarContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

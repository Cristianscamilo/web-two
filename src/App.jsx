import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout/navbar/Navbar";
import {
  ItemDetalContainer,
  ItemListContainer,
  ShoppingCarContainer,
} from "./components/pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/shopingCar" element={<ShoppingCarContainer />} />
          <Route path="/item/:id" element={<ItemDetalContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

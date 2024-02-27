import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ShoppingCarContainer from "./components/pages/shoppingCarContainer/ShoppingCarContainer";
import ItemDetalContainer from "./components/pages/itemDetalContainer/ItemDetalContainer";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path="/" element={ <ItemListContainer /> } />
          <Route path="/shopingCar" element={<ShoppingCarContainer/>} />
          <Route path="/item/:id" element={ <ItemDetalContainer/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

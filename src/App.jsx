import Footer from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import ItemListContainer from "./components/pages/ItemListContainer";

function App() {

  return (
    <>
    <Navbar />
    <ItemListContainer greeting={"Hola, bievenido a tu comercio de confianza!"} />
    <Footer />
    </>
  )
}
 
export default App

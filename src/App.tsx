import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import RoutesApp from "./components/routes/RoutesApp";
import ShopingCartContextProvider from "./context/shopingCartContext";

function App() {
  return (
    <>
      <ShopingCartContextProvider>
        <Navbar />
        <RoutesApp />
        <Footer />
      </ShopingCartContextProvider>
    </>
  );
}

export default App;

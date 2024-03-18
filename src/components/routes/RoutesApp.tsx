import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Products from "../../pages/products/Products";
import ProductItem from "../../pages/productItem/ProductItem";
import Cart from "../../pages/cart/Cart";
import Buying from "../../pages/buying/Buying";

function RoutesApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productItem/:Id" element={<ProductItem />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/buying" element={<Buying />} />
      </Routes>
    </>
  );
}

export default RoutesApp;

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import { ShopingCartContext } from "../../context/shopingCartContext";
import SidebarCart from "../sidbarCart/SidebarCart";

function Navbar() {
  const { getCartQty } = useContext(ShopingCartContext);
  const [isShowCart, setIsShowCart] = useState<boolean>(false);

  const showCartModal = () => {
    if (getCartQty > 0) {
      setIsShowCart(true);
    }
  };

  const closeCartModal = () => {
    setIsShowCart(false);
  };

  return (
    <>
      <div className=" z-20 bg-gray-900 text-white flex justify-between items-center py-2 px-12 sticky top-0 left-0 right-0">
        <div>
          <img
            className=" w-42 h-20"
            src="/src/assets/images/logoNafis.png"
            alt="logo-nafis"
          />
        </div>

        <div>
          <ul className=" flex items-center text-xl">
            <li className=" py-3 px-2 ml-8">
              <Link to={"/products"}>Products</Link>
            </li>
            <li className=" py-3 px-2 ml-8">
              <Link to={"/about"}>About Us</Link>
            </li>
            <li className=" py-3 px-2 ml-8">
              <Link to={"/"}>Home</Link>
            </li>

            <li
              onMouseEnter={showCartModal}
              className="cart-icon py-3 px-2 ml-14 text-3xl text-yellow-500 flex flex-col items-center justify-center cursor-pointer"
            >
              <div className=" text-white bg-red-600 text-xl p-1 w-8 h-8 rounded-full flex items-center justify-center">
                {getCartQty}
              </div>

              {getCartQty > 0 ? (
                <Link to={"/cart"}>
                  <FaShoppingCart />
                </Link>
              ) : (
                <FaShoppingCart />
              )}
            </li>
          </ul>
        </div>
      </div>

      <SidebarCart
        className={isShowCart ? "opacity-90 " : "opacity-0 "}
        closeClick={closeCartModal}
      />
    </>
  );
}

export default Navbar;

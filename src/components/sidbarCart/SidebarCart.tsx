import { useContext } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { ShopingCartContext } from "../../context/shopingCartContext";
import { useGetData } from "../../hooks/useGetData";
import CartProductSidbar from "../cartProductSidbar/CartProductSidbar";
import Button from "../button/Button";
import { Link } from "react-router-dom";

type TSidbarCartProps = {
  closeClick: () => void;
  className: string;
};

function SidebarCart({ closeClick, className }: TSidbarCartProps) {
  const { data: allProducts } = useGetData();
  
  const { totalPrice, cartItems, discountPrice } =
    useContext(ShopingCartContext);

  return (
    <div
      className={`bg-gray-800 fixed right-0 w-80 z-10 p-4 border-2 border-gray-500 rounded-2xl transition duration-500 ease-in-out ${className} `}
    >
      <div className=" text-right">
        <button onClick={closeClick} className="text-4xl text-red-500">
          <IoMdCloseCircle />
        </button>
      </div>

      <div className=" my-3">
        <div className=" flex mt-2 p-2 items-center justify-between  text-gray-200 bg-gray-900 text-center rounded-3xl text-lg">
          <p className=" text-base">Total Price:</p>
          <p className=" bg-red-500 text-white px-4 py-1 rounded-3xl">
            ${totalPrice(allProducts ?? []).toFixed(2)}
          </p>
        </div>

        <div className=" flex mt-2 p-2 items-center justify-between text-gray-200 bg-gray-900 text-center rounded-3xl text-lg">
          <p className=" text-base">discounted Price:</p>
          <p className=" bg-red-500 text-white px-4 py-1 rounded-3xl">
            ${discountPrice.toFixed(2)}
          </p>
        </div>

        <div className=" flex mt-2 p-2 items-center justify-between text-gray-200 bg-gray-900 text-center rounded-3xl text-lg">
          <p className=" text-base">Payable:</p>
          <p className=" bg-green-700 text-white px-4 py-1 rounded-3xl">
            ${(totalPrice(allProducts ?? []) - discountPrice).toFixed(2)}
          </p>
        </div>
      </div>

      <div className=" max-h-80 overflow-scroll">
        {cartItems.map((item) => (
          <CartProductSidbar {...item} key={item.id} />
        ))}
      </div>

      <div className="mt-6 text-gray-200">
        <Link to={"/buying"}>
          <Button color="success" title="Continue Shoping" />
        </Link>
      </div>
    </div>
  );
}

export default SidebarCart;

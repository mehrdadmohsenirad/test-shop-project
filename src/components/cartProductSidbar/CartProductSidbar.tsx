import { useContext } from "react";
import {
  ShopingCartContext,
  TCartItems,
} from "../../context/shopingCartContext";
import { useGetData } from "../../hooks/useGetData";
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";

function CartProductSidbar({ id, qty }: TCartItems) {
  const { data: allProducts } = useGetData();

  const { increaseCartQty, decreaseCartQty } = useContext(ShopingCartContext);

  let newItems = allProducts?.find((item) => item.id === id);
  if (newItems == null) {
    return null;
  }

  return (
    <div className=" mt-5 w-full text-white text-center border-2 border-gray-700 rounded-2xl overflow-hidden ">
      <div className=" flex items-center">
        <img
          className=" h-24 min-w-20 overflow-hidden"
          src={newItems?.image}
          alt={`img${newItems?.title}`}
        />

        <h1 className=" ml-2">{newItems?.title}</h1>
      </div>

      <div className=" p-4">
        <div className=" flex items-center justify-center gap-4">
          <h3 className="mt-4 mb-4 text-red-500 text-xl">
            <span className=" text-gray-400 text-lg">Quantity:</span> {qty}
          </h3>
          <div className=" flex flex-col gap-1">
            <button
              className=" text-lg text-yellow-500"
              onClick={() => increaseCartQty(id)}
            >
              <FaPlusSquare />
            </button>
            <button
              className=" text-lg text-yellow-500"
              onClick={() => decreaseCartQty(id)}
            >
              <FaMinusSquare />
            </button>
          </div>
        </div>
        <h3 className=" mt-4 mb-4 text-yellow-500 text-lg">
          <span className=" text-gray-400">Total Price:</span> $
          {(newItems?.price * qty).toFixed(2)}
        </h3>
      </div>
    </div>
  );
}

export default CartProductSidbar;

import {
  ShopingCartContext,
  TCartItems,
} from "../../context/shopingCartContext";
import Container from "../container/Container";
import Button from "../button/Button";
import { useGetData } from "../../hooks/useGetData";
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import { useContext } from "react";

function CartProduct({ id, qty }: TCartItems) {
  const { data: allProducts } = useGetData();
  const { decreaseCartQty, increaseCartQty, removeItemFromCart } =
    useContext(ShopingCartContext);

  let newItems = allProducts?.find((item) => item.id === id);
  if (newItems == null) {
    return null;
  }

  return (
    <div>
      <Container>
        <div className=" w-96 text-white text-center border-2 border-gray-700 rounded-2xl">
          <img
            className="rounded-t-2xl w-full h-80"
            src={newItems?.image}
            alt={`img${newItems?.title}`}
          />

          <div className=" p-4">
            <h1 className=" text-xl font-bold h-24">{newItems?.title}</h1>
            <div className=" flex items-center justify-center gap-4">
              <h3 className="mt-4 mb-4 text-red-500 text-2xl">
                <span className=" text-gray-400 text-xl">Quantity:</span> {qty}
              </h3>
              <div className=" flex flex-col gap-1">
                <button
                  className=" text-xl text-yellow-500"
                  onClick={() => increaseCartQty(id)}
                >
                  <FaPlusSquare />
                </button>
                <button
                  className=" text-xl text-yellow-500"
                  onClick={() => decreaseCartQty(id)}
                >
                  <FaMinusSquare />
                </button>
              </div>
            </div>
            <h3 className=" mt-4 mb-4 text-yellow-500 text-xl">
              <span className=" text-gray-400">Total Price:</span> $
              {(newItems?.price * qty).toFixed(2)}
            </h3>
          </div>

          <Button
            onClick={() => removeItemFromCart(id)}
            color="error"
            title="Remove"
          />
        </div>
      </Container>
    </div>
  );
}

export default CartProduct;

import { useContext, useState } from "react";
import { ShopingCartContext } from "../../context/shopingCartContext";
import Container from "../../components/container/Container";
import CartProduct from "../../components/cartProduct/CartProduct";
import { useGetData } from "../../hooks/useGetData";
import Tag from "../../components/tag/Tag";
import "./Cart.css";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, totalPrice, discountHandler, discountPrice } =
    useContext(ShopingCartContext);

  const [discountValue, setDiscountValue] = useState<string>("");

  const { data: allProducts } = useGetData();

  const dicountChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountValue(e.target.value);
  };

  return (
    <>
      <Container>
        <div className="flex justify-center gap-4">
          {totalPrice(allProducts ?? []) > 0 && (
            <>
              <Tag>
                <p>Total Price:</p>
                <p className=" bg-red-500 text-white px-4 py-1 mt-2 rounded-3xl font-extrabold">
                  ${totalPrice(allProducts ?? []).toFixed(2)}
                </p>
              </Tag>

              <Tag>
                <p>discounted Price:</p>
                <p className=" bg-red-500 text-white px-4 py-1 mt-2 rounded-3xl font-extrabold">
                  ${discountPrice.toFixed(2)}
                </p>
              </Tag>

              <Tag>
                <p>Payable:</p>
                <p className=" bg-green-700 text-white px-4 py-1 mt-2 rounded-3xl font-extrabold">
                  ${(totalPrice(allProducts ?? []) - discountPrice).toFixed(2)}
                </p>
              </Tag>
            </>
          )}
        </div>

        {totalPrice(allProducts ?? []) > 0 && (
          <div className=" flex items-center justify-center mt-8 gap-6">
            <input
              className=" px-4 py-2 border-none outline-none bg-gray-900 text-white rounded-3xl"
              maxLength={4}
              type="text"
              placeholder="Discount Code..."
              onChange={dicountChangeHandler}
            />
            <button
              className=" bg-yellow-500 text-white py-2 px-6 rounded-3xl"
              onClick={() => discountHandler(allProducts ?? [], discountValue)}
            >
              Click
            </button>
          </div>
        )}

        <div className=" flex flex-wrap justify-center items-center w-full gap-10 mt-16">
          {cartItems.map((item) => (
            <CartProduct {...item} key={item.id} />
          ))}
        </div>

        {totalPrice(allProducts ?? []) > 0 && (
          <div className=" text-white">
            <Link to={"/buying"}>
              <Button
                color="success"
                title="Continue Shoping"
              />
            </Link>
          </div>
        )}
      </Container>
    </>
  );
}

export default Cart;

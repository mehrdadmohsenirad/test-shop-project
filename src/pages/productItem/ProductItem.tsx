import { useContext } from "react";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useParams } from "react-router-dom";
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import { ShopingCartContext } from "../../context/shopingCartContext";
import { useGetData } from "../../hooks/useGetData";

function ProductItem() {
  const { data: allProducts } = useGetData();

  const { Id } = useParams();

  const {
    increaseCartQty,
    getQtyOfProduct,
    decreaseCartQty,
    removeItemFromCart,
  } = useContext(ShopingCartContext);

  let newProduct = allProducts?.find((product) => {
    return product.id === parseInt(Id as string);
  });

  if (newProduct == null) {
    return null;
  }

  return (
    <>
      <Container>
        <h1 className="mt-20 mb-20 text-5xl text-yellow-500 text-center">
          Product Detail
        </h1>

        <div className=" rounded-lg bg-gray-900 grid grid-cols-4 gap-8 text-white">
          <div className=" relative p-5 w-full flex flex-col col-span-1">
            <img
              className=" rounded-lg w-full"
              src={newProduct?.image}
              alt={newProduct?.title}
            />

            <h1 className=" text-center text-xl text-gray-200 mt-5">{newProduct?.title}</h1>
            <p className=" text-center text-xl text-yellow-500 mt-8 mb-8">
              ${(newProduct?.price * getQtyOfProduct(newProduct.id)).toFixed(2)}
            </p>
            {getQtyOfProduct(newProduct.id) === 0 ? (
              <Button
                onClick={() => increaseCartQty(parseInt(Id as string))}
                color="success"
                title={"Add To Cart"}
              />
            ) : (
              <>
                <div className=" mt-2 mb-10 flex gap-8 items-center justify-center">
                  <button
                    className=" text-3xl text-yellow-500"
                    onClick={() => decreaseCartQty(parseInt(Id as string))}
                  >
                    <FaMinusSquare />
                  </button>

                  <p className="text-3xl">{getQtyOfProduct(newProduct.id)}</p>

                  <button
                    className=" text-3xl text-yellow-500"
                    onClick={() => increaseCartQty(parseInt(Id as string))}
                  >
                    <FaPlusSquare />
                  </button>
                </div>
                <Button
                  onClick={() => {
                    removeItemFromCart(parseInt(Id as string));
                  }}
                  color="error"
                  title={"Cancel"}
                />
              </>
            )}
          </div>

          <div className="p-5 flex-1 col-span-3">
            <h3 className=" text-justify text-2xl mb-4">More Details:</h3>
            <p className=" text-gray-400 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ProductItem;

import { TProduct } from "../../types/ProductType";

function Product({ image, title, price, description }: TProduct) {
  return (
    <>
      <div className=" w-full text-white text-center border-2 border-gray-700 rounded-2xl">
        <img
          className="rounded-t-2xl w-full h-96"
          src={image}
          alt={`img-${title}`}
        />

        <div className=" h-72 overflow-scroll p-4">
          <h1 className=" text-xl font-bold text-gray-300">{title}</h1>
          <h3 className=" mt-5 mb-8 text-yellow-500 text-2xl">${price}</h3>
          <p className=" text-gray-500 text-justify ">{description}</p>
        </div>
      </div>
    </>
  );
}

export default Product;

import Container from "../../components/container/Container";
import Product from "../../components/product/Product";
import { Link } from "react-router-dom";
import { useGetData } from "../../hooks/useGetData";

function Products() {
  const { data: allProducts, isLoading } = useGetData();

  return (
    <>
      <Container>
        <h1 className="mt-20 mb-20 text-5xl text-yellow-500 text-center">
          Products
        </h1>

        {isLoading ? (
          <div className=" h-96 flex items-center justify-center">
            <div className=" w-full text-center text-red-600">
              <h1 className=" text-center text-8xl">LOADING ...</h1>
            </div>
          </div>
        ) : (
          <div className=" grid grid-cols-3 gap-10">
            {allProducts?.map((product) => (
              <Link to={`/productItem/${product.id}`} key={product.id}>
                <Product {...product} />
              </Link>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}

export default Products;

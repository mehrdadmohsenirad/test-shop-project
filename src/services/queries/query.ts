import { TClientShoping } from "../../context/shopingCartContext";
import { TProduct } from "../../types/ProductType";
import { mainUrl } from "../api/api";

export const getProducts = async () => {
  const { data } = await mainUrl.get<TProduct[]>(`/products`);

  return data;
};

export const postProduct = async ({
  items,
  address,
  email,
}: TClientShoping) => {
  const { data } = await mainUrl.post("/products", {
    data: {
      items,
      address,
      email,
    },
  });
  

  return data;
};

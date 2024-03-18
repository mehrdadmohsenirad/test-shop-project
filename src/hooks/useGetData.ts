import { TProduct } from "../types/ProductType";
import { getProducts } from "../services/queries/query";
import { useQuery } from "@tanstack/react-query";

export const useGetData = () => {
  const { data, isLoading } = useQuery<TProduct[]>({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  });

  return { data, isLoading };
};

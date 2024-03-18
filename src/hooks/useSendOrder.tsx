import { useMutation } from "@tanstack/react-query";
import { postProduct } from "../services/queries/query";

export const useSendOrder = () => {
  return useMutation({
    mutationFn: postProduct,
  });
};

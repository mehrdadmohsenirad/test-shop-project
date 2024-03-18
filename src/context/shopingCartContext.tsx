import { createContext, useState } from "react";
import { TProduct } from "../types/ProductType";
import Swal from "sweetalert2";

type TChildren = {
  children: React.ReactNode;
};

export type TClientShoping = {
  items: TCartItems[];
  address: string;
  email: string;
};

export type TCartItems = {
  qty: number;
  id: number;
};

type TShopingCartContextValue = {
  cartItems: TCartItems[];
  getCartQty: number;
  increaseCartQty: (id: number) => void;
  decreaseCartQty: (id: number) => void;
  removeItemFromCart: (id: number) => void;
  getQtyOfProduct: (id: number) => number;
  totalPrice: (allProducts: TProduct[]) => number;
  discountHandler: (allProducts: TProduct[], discountValue: string) => void;
  discountPrice: number;
  // checkOutShopping: (
  //   addressValue: string,
  //   emailValue: string,
  //   allProducts: TProduct[]
  // ) => void;
};

// export const ShopingCartContext = createContext<TShopingCartContextValue | null>(null);

export const ShopingCartContext = createContext({} as TShopingCartContextValue);

function ShopingCartContextProvider({ children }: TChildren) {
  const [cartItems, setCartItems] = useState<TCartItems[]>([]);

  const discountCode = "0000";
  const [discountPrice, setDiscountPrice] = useState<number>(0);

  const getCartQty = cartItems?.reduce((qty, item) => qty + item.qty, 0);

  const increaseCartQty = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems?.find((item) => item.id === id) == null) {
        return [...currentItems, { id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQtyOfProduct = (id: number) => {
    return (
      cartItems.find((item) => {
        return item.id === id;
      })?.qty || 0
    );
  };

  const decreaseCartQty = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems?.find((item) => item.id === id)?.qty === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItemFromCart = (id: number) => {
    const newCarts = cartItems.filter((item) => item.id !== id);

    setCartItems(newCarts);
  };

  const totalPrice = (allProducts: TProduct[]) => {
    const totalPrice = cartItems.reduce((total, cartItem) => {
      const item = allProducts?.find((product) => product.id === cartItem.id);

      return total + (item?.price || 0) * cartItem.qty;
    }, 0);

    return totalPrice;
  };

  const discountHandler = (allProducts: TProduct[], discountValue: string) => {
    if (discountValue === discountCode) {
      let _totalPrice = totalPrice(allProducts ?? []);

      setDiscountPrice((_totalPrice * 20) / 100);
    } else {
      setDiscountPrice(0);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your discount number is wrong!",
      });
    }
  };

  // const checkOutShopping = (
  //   addressValue: string,
  //   emailValue: string,
  //   allProducts: TProduct[]
  // ) => {
  //   if (addressValue.length > 5 && emailValue.length > 0) {
  //     const clientItems = cartItems.map((item) => {
  //       return {
  //         ...allProducts.find((product) => product.id === item.id),
  //         quantity: item.qty,
  //       };
  //     });

  //     let clientShoping: TClientShoping = {
  //       items: cartItems,
  //       address: addressValue,
  //       email: emailValue,
  //     };

  //     axios.post('' , {
  //       items: clientItems,
  //       address: addressValue,
  //       email: emailValue,
  //     }).then((res) => res.data)

  //     console.log(clientShoping);
  //   }
  // };

  return (
    <>
      <ShopingCartContext.Provider
        value={{
          cartItems,
          getCartQty,
          increaseCartQty,
          decreaseCartQty,
          removeItemFromCart,
          getQtyOfProduct,
          totalPrice,
          discountHandler,
          discountPrice,
          // checkOutShopping,
        }}
      >
        {children}
      </ShopingCartContext.Provider>
    </>
  );
}

export default ShopingCartContextProvider;

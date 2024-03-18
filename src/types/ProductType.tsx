export type TProduct = {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
  description: string;
  quantity?:number;
  rating: {
    rate: number;
    count: number;
  };
};


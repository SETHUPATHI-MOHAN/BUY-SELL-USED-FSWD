
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  seller: {
    name: string;
    avatarUrl: string;
  };
}

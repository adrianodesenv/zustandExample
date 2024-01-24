import {create} from 'zustand';

type Product = {
  id: number;
  name: string;
  price: number;
};

type ProductState = {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
};

export const useProductsStore = create<ProductState>(set => ({
  products: [],
  addProduct: product =>
    set(state => ({products: [...state.products, product]})),
  removeProduct: id =>
    set(state => ({
      products: state.products.filter(product => product.id !== id),
    })),
}));

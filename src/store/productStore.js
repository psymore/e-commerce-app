import { create } from "zustand";

const useProductStore = create(set => ({
  products: [],
  setProducts: products => set({ products }),
  fetchProducts: async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      set({ products: data });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
}));

export default useProductStore;

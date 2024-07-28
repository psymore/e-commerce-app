import { create } from "zustand";

const useProductStore = create(set => ({
  products: [],
  product: null,
  categories: [],
  categoryProducts: [],
  setProducts: products => set({ products }),
  setProduct: product => set({ product }),
  setCategories: categories => set({ categories }),
  setCategoryProducts: categoryProducts => set({ categoryProducts }),

  fetchProducts: async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      set({ products: data });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },

  fetchProductById: async id => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      set({ product: data });
    } catch (error) {
      console.error(`Error fetching product with ID ${id}:`, error);
    }
  },

  fetchCategories: async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      set({ categories: data });
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  },

  fetchProductsByCategory: async category => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await response.json();
      set({ categoryProducts: data });
    } catch (error) {
      console.error(`Error fetching products for category ${category}:`, error);
    }
  },

  updateProduct: async (id, updatedProduct) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });
      const data = await response.json();
      set(state => ({
        products: state.products.map(product =>
          product.id === id ? data : product
        ),
      }));
    } catch (error) {
      console.error(`Error updating product with ID ${id}:`, error);
    }
  },

  deleteProduct: async id => {
    try {
      await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE",
      });
      set(state => ({
        products: state.products.filter(product => product.id !== id),
      }));
    } catch (error) {
      console.error(`Error deleting product with ID ${id}:`, error);
    }
  },
}));

export default useProductStore;

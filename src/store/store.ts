import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

import { IProduct } from "../utils/types";

export interface ProductState {
    products: IProduct[];
    favoriteProducts: IProduct[];
    addProducts: (products: IProduct[]) => void;
    addAllProductsToFavorites: (products: IProduct[]) => void;
    addFavoriteProduct: (product: IProduct) => void;
    removeFavoriteProduct: (productId: string) => void;
}

export const useStore = create<ProductState>((set) => ({
    products: [],
    favoriteProducts: [],
    addProducts: (products) => set({ products }),
    addAllProductsToFavorites: (products) => set({ favoriteProducts: products }),
    addFavoriteProduct: (product) => {
        set((state) => {
            const updatedFavorites = [...state.favoriteProducts, product];
            AsyncStorage.setItem("@favoriteProducts", JSON.stringify(updatedFavorites));
            return { favoriteProducts: updatedFavorites };
        });
    },
    removeFavoriteProduct: (productId) => {
        set((state) => {
            const updatedFavorites = state.favoriteProducts.filter(
                (product) => product.id !== productId,
            );
            AsyncStorage.setItem("@favoriteProducts", JSON.stringify(updatedFavorites));
            return { favoriteProducts: updatedFavorites };
        });
    },
}));

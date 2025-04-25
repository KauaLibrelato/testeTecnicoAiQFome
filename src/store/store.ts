import { create } from "zustand";

import { storageService } from "../services/storage/storageService";
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
            storageService.setItem("@favoriteProducts", updatedFavorites);
            return { favoriteProducts: updatedFavorites };
        });
    },
    removeFavoriteProduct: (productId) => {
        set((state) => {
            const updatedFavorites = state.favoriteProducts.filter(
                (product) => product.id !== productId,
            );
            storageService.setItem("@favoriteProducts", updatedFavorites);
            return { favoriteProducts: updatedFavorites };
        });
    },
}));

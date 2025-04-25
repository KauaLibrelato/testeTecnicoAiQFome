import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "@tanstack/react-query";

import { getProducts } from "../../../services/Products";
import { useStore } from "../../../store/store";
import { IProduct } from "../../../utils/types";

export function useQueries() {
    const { addAllProductsToFavorites, addProducts } = useStore((state) => state);
    const { data, isLoading, refetch, isRefetching } = useQuery({
        queryKey: ["products"],
        staleTime: 1000 * 60 * 5,
        queryFn: async () => {
            const products = await getProducts();

            const favoriteProducts = await AsyncStorage.getItem("@favoriteProducts");
            const parsedFavorites: IProduct[] = favoriteProducts
                ? JSON.parse(favoriteProducts)
                : [];

            const productsWithFavoriteStatus = products?.map((product: IProduct) => {
                const isFavorite = parsedFavorites.some(
                    (favProduct) => favProduct.id === product.id,
                );
                return { ...product, isFavorite };
            });

            addAllProductsToFavorites(parsedFavorites ?? []);
            addProducts(productsWithFavoriteStatus ?? []);
            return {
                products: productsWithFavoriteStatus,
            };
        },
    });

    return {
        isLoading,
        isRefetching,
        refetch,
        data,
    };
}

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "@tanstack/react-query";

import { IProduct } from "../../../utils/types";

export function useQueries() {
    const { data, isLoading } = useQuery({
        queryKey: ["favoriteProducts"],
        staleTime: 1000 * 60 * 5,
        queryFn: async () => {
            const favoriteProducts = await AsyncStorage.getItem("@favoriteProducts");
            const parsedProducts: IProduct[] = favoriteProducts
                ? JSON.parse(favoriteProducts)
                : null;
            if (!parsedProducts) {
                return {
                    products: [],
                };
            }

            return {
                products: parsedProducts,
            };
        },
    });

    return {
        isLoading,
        data,
    };
}

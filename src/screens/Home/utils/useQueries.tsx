import { useQuery } from "@tanstack/react-query";

import { getProducts } from "../../../services/Products";

export function useQueries() {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["products"],
        staleTime: 1000 * 60 * 5,
        queryFn: async () => {
            const products = await getProducts();

            return {
                products,
            };
        },
    });

    return {
        isLoading,
        refetch,
        data,
    };
}

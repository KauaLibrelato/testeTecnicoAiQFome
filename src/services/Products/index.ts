import AsyncStorage from "@react-native-async-storage/async-storage";

import { axiosAdapter } from "../../infra";
import { IProduct } from "../../utils/types";

export async function getProducts() {
    const { response } = await axiosAdapter<IProduct[]>({
        method: "get",
        url: "products",
        errorTitle: "Error when fetching products",
    });
    return response;
}

export async function getFavoritesProducts() {
    const response = await AsyncStorage.getItem("@favoriteProducts");
    const parsedFavorites: IProduct[] = response ? JSON.parse(response) : [];
    return parsedFavorites;
}

import { axiosAdapter } from "../../infra";
import { IProduct } from "../../utils/types";
import { storageService } from "../storage/storageService";

export async function getProducts() {
    const { response } = await axiosAdapter<IProduct[]>({
        method: "get",
        url: "products",
        errorTitle: "Error when fetching products",
    });
    return response;
}

export async function getFavoritesProducts() {
    const favorites = await storageService.getItem<IProduct[]>("@favoriteProducts");
    return favorites;
}

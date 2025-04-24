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

export async function getProductById(id: string) {
    const { response } = await axiosAdapter<IProduct>({
        method: "get",
        url: `products/${id}`,
        errorTitle: "Error when fetching product by id",
    });

    return response;
}

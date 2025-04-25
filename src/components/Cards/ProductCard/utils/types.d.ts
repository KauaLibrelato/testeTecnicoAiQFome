import { IProduct } from "../../../../utils/types";

export interface IProductCard {
    data: IProduct;
    onPress: VoidFunction;
    favoriteScreen?: boolean;
}

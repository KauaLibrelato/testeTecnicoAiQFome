import { IProduct } from "../../../../utils/types";

export interface IProductCard {
    data: IProduct;
    onPress: VoidFunction;
    onFavoritePress?: (id: string, isFavorite: boolean) => void;
}

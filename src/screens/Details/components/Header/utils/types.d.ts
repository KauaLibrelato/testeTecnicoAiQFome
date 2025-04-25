import { Animated } from "react-native";

import { IProduct } from "../../../../../utils/types";

export interface IHeader {
    scrollY: Animated.Value;
    isFavorite: boolean;
    setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>;
    data: IProduct;
}

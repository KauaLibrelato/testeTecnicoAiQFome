import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { toast } from "sonner-native";
import { useTheme } from "styled-components";

import { NavigationProps } from "../../../../routes/utils/types";
import { useStore } from "../../../../store/store";
import * as S from "../../DetailsStyles";

import { IHeader } from "./utils/types";

export function Header({ scrollY, isFavorite, setIsFavorite, data }: IHeader) {
    const theme = useTheme();
    const navigation = useNavigation<NavigationProps>();
    const { addFavoriteProduct, removeFavoriteProduct } = useStore((state) => state);
    const borderOpacity = scrollY.interpolate({
        inputRange: [100, 250],
        outputRange: [0, 1],
        extrapolate: "clamp",
    });

    const handleFavoritePress = useCallback(() => {
        try {
            setIsFavorite((prev) => {
                const newState = !prev;
                if (newState) {
                    addFavoriteProduct(data);
                    toast.success("Product added to favorites!", {
                        richColors: true,
                    });
                } else {
                    removeFavoriteProduct(data.id);
                    toast.error("Product removed from favorites!", {
                        richColors: true,
                    });
                }
                return newState;
            });
        } catch {
            toast.error("Error toggling favorite product", {
                richColors: true,
            });
        }
    }, [addFavoriteProduct, data, removeFavoriteProduct, setIsFavorite]);

    return (
        <S.Header>
            <S.HeaderContent>
                <S.HeaderButton onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={32} color={theme.colors.purple} />
                </S.HeaderButton>
                <S.HeaderButton onPress={handleFavoritePress} testID="favorite-button">
                    <AntDesign
                        name={isFavorite ? "heart" : "hearto"}
                        size={32}
                        color={theme.colors.purple}
                    />
                </S.HeaderButton>
            </S.HeaderContent>

            <S.HeaderBorder style={{ opacity: borderOpacity }} />
        </S.Header>
    );
}
function addFavoriteProduct(data: any) {
    throw new Error("Function not implemented.");
}

function removeFavoriteProduct(id: any) {
    throw new Error("Function not implemented.");
}

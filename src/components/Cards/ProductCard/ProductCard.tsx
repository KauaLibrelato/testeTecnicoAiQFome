import AntDesign from "@expo/vector-icons/AntDesign";
import React, { memo } from "react";
import { toast } from "sonner-native";
import { useTheme } from "styled-components/native";

import { useStore } from "../../../store/store";
import { blurhash } from "../../../utils/constants";
import { capitalizeFirstLetter, formatCurrency } from "../../../utils/functions";
import { IProduct } from "../../../utils/types";
import { Text } from "../../Others/Text/Text";

import * as S from "./ProductCardStyles";
import { IProductCard } from "./utils/types";

function ProductCard({ data, onPress, favoriteScreen }: IProductCard) {
    const theme = useTheme();
    const { removeFavoriteProduct, addFavoriteProduct, favoriteProducts } = useStore(
        (state) => state,
    );

    const isFavorite = favoriteProducts?.some((favProduct: IProduct) => favProduct.id === data.id);

    const updateFavorites = async (productId: string, isFavorite: boolean) => {
        if (isFavorite) {
            addFavoriteProduct(data);
            toast.success("Product added to favorites!", {
                richColors: true,
            });
        } else {
            removeFavoriteProduct(productId);
            toast.error("Product removed from favorites!", {
                richColors: true,
            });
        }
    };

    const handleFavoritePress = async () => {
        if (favoriteScreen) {
            await updateFavorites(data.id, false);
        } else {
            const newFavoriteState = !isFavorite;
            await updateFavorites(data.id, newFavoriteState);
        }
    };

    return (
        <S.Container
            onPress={onPress}
            testID="product-card-container"
            favoriteScreen={favoriteScreen}
        >
            <S.Miniature
                testID="product-card-image"
                source={{ uri: data?.image }}
                contentFit="contain"
                placeholder={{ blurhash }}
                alt={data?.title ?? data?.description ?? "Product image"}
            />
            <S.TopBadgesContainer>
                <S.FavoriteButton
                    onPress={handleFavoritePress}
                    testID="favorite-button"
                    activeOpacity={0.7}
                >
                    <AntDesign
                        name={isFavorite || favoriteScreen ? "heart" : "hearto"}
                        size={18}
                        color={theme.colors.purple}
                    />
                </S.FavoriteButton>
            </S.TopBadgesContainer>

            <S.TextsContainer testID="texts-container">
                <Text
                    fontSize={16}
                    fontFamily={theme.fonts.bold}
                    color={theme.colors.primary}
                    numberOfLines={1}
                >
                    {data?.title ?? "Without title"}
                </Text>

                <Text fontSize={14} fontFamily={theme.fonts.medium} color={theme.colors.primary}>
                    {capitalizeFirstLetter(data?.category ?? "Without category")}
                </Text>

                <Text fontSize={16} fontFamily={theme.fonts.bold} color={theme.colors.primary}>
                    {formatCurrency(data?.price ?? 0)}
                </Text>
                <S.TextLine>
                    <AntDesign name="star" size={20} color={theme.colors.warning} />
                    <Text
                        fontSize={14}
                        fontFamily={theme.fonts.medium}
                        color={theme.colors.primary}
                    >
                        {String(data?.rating?.rate) + ` (${data?.rating?.count})`}
                    </Text>
                </S.TextLine>
            </S.TextsContainer>
        </S.Container>
    );
}

export default memo(ProductCard);

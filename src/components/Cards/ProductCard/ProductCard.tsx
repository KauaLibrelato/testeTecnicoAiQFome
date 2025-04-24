import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import { useTheme } from "styled-components/native";

import { blurhash } from "../../../utils/constants";
import { capitalizeFirstLetter, formatCurrency } from "../../../utils/functions";
import { Text } from "../../Others/Text/Text";

import * as S from "./ProductCardStyles";
import { IProductCard } from "./utils/types";

export function ProductCard({ data, onPress, onFavoritePress }: IProductCard) {
    const theme = useTheme();
    const [isFavorite, setIsFavorite] = useState(data?.isFavorite || false);

    const handleFavoritePress = () => {
        const newFavoriteState = !isFavorite;
        setIsFavorite(newFavoriteState);
        if (onFavoritePress) {
            onFavoritePress(data.id, newFavoriteState);
        }
    };

    return (
        <S.Container testID="product-card-container">
            <S.TouchableContainer onPress={onPress} testID="product-card-touchable">
                <S.Miniature
                    testID="product-card-image"
                    source={{ uri: data?.image }}
                    contentFit="contain"
                    placeholder={{ blurhash }}
                    alt={data?.title ?? "Without title"}
                />
                <S.TopBadgesContainer>
                    <S.CategoryBadge testID="category-badge">
                        <Text
                            fontSize={14}
                            fontFamily={theme.fonts.medium}
                            color={theme.colors.primary}
                        >
                            {capitalizeFirstLetter(data?.category ?? "Without category")}
                        </Text>
                    </S.CategoryBadge>

                    <S.FavoriteButton
                        onPress={handleFavoritePress}
                        testID="favorite-button"
                        activeOpacity={0.7}
                    >
                        <AntDesign
                            name={isFavorite ? "heart" : "hearto"}
                            size={18}
                            color={isFavorite ? theme.colors.error : theme.colors.primary}
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
                    <Text
                        fontSize={14}
                        fontFamily={theme.fonts.medium}
                        color={theme.colors.primary}
                    >
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
            </S.TouchableContainer>
        </S.Container>
    );
}

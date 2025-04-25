import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Animated, View } from "react-native";
import { useTheme } from "styled-components/native";

import { Button, Text } from "../../components";
import { EButtonType } from "../../infra";
import { NavigationProps } from "../../routes/utils/types";
import { useStore } from "../../store/store";
import { capitalizeFirstLetter, formatCurrency } from "../../utils/functions";
import { IProduct } from "../../utils/types";

import * as S from "./DetailsStyles";
import { Header } from "./components/Header/Header";
export function Details() {
    const params = useRoute().params as { data: IProduct };
    const theme = useTheme();
    const navigation = useNavigation<NavigationProps>();
    const scrollY = useRef(new Animated.Value(0)).current;
    const { favoriteProducts } = useStore((state) => state);
    const [isFavorite, setIsFavorite] = useState(
        favoriteProducts?.some((favProduct) => favProduct.id === params.data.id),
    );
    const imageOpacity = scrollY.interpolate({
        inputRange: [0, 250],
        outputRange: [1, 0],
        extrapolate: "clamp",
    });

    useEffect(() => {
        navigation.setOptions({
            header: () => (
                <Header
                    scrollY={scrollY}
                    isFavorite={isFavorite}
                    setIsFavorite={setIsFavorite}
                    data={params?.data}
                />
            ),
            headerTitle: "",
        });
    }, [isFavorite, navigation, scrollY, params?.data]);

    return (
        <>
            <S.Container
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
                    useNativeDriver: false,
                })}
            >
                <S.ImageContainer>
                    <S.Image
                        source={{
                            uri: params?.data?.image,
                        }}
                        contentFit="contain"
                        style={{ opacity: imageOpacity }}
                    />
                </S.ImageContainer>

                <S.Body>
                    <Text color={theme.colors.primary} fontFamily={theme.fonts.bold} fontSize={24}>
                        {params?.data?.title ??
                            params?.data?.description ??
                            "Without title or description"}
                    </Text>

                    <Text color={theme.colors.primary} fontFamily={theme.fonts.bold} fontSize={16}>
                        {params?.data?.description ?? "Without title or description"}
                    </Text>

                    <Text
                        color={theme.colors.secondary}
                        fontFamily={theme.fonts.semiBold}
                        fontSize={16}
                    >
                        Category:{" "}
                        <Text
                            color={theme.colors.primary}
                            fontFamily={theme.fonts.bold}
                            fontSize={16}
                        >
                            {capitalizeFirstLetter(params?.data?.category ?? "Without category")}
                        </Text>
                    </Text>
                    <S.RatingContainer>
                        <Text
                            color={theme.colors.secondary}
                            fontFamily={theme.fonts.bold}
                            fontSize={16}
                        >
                            Rating:{" "}
                        </Text>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
                            <AntDesign name="star" size={18} color={theme.colors.warning} />
                            <Text
                                color={theme.colors.primary}
                                fontFamily={theme.fonts.bold}
                                fontSize={16}
                            >
                                {params?.data?.rating?.rate
                                    ? String(params?.data?.rating?.rate) +
                                      ` (${params?.data?.rating?.count})`
                                    : "Without rating"}
                            </Text>
                        </View>
                    </S.RatingContainer>
                </S.Body>
            </S.Container>
            <S.Footer>
                <Text color={theme.colors.primary} fontFamily={theme.fonts.bold} fontSize={20}>
                    {params?.data?.price ? formatCurrency(params?.data?.price) : "Without price"}
                </Text>

                <S.ButtonContainer>
                    <Button text="Buy" type={EButtonType.FILL} bgColor={theme.colors.purple} />
                </S.ButtonContainer>
            </S.Footer>
        </>
    );
}

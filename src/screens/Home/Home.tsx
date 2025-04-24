import AntDesign from "@expo/vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useTheme } from "styled-components/native";

import Logo from "../../assets/svgs/logo.svg";
import { Button, ScreenContent } from "../../components";
import { ProductCard } from "../../components/Cards/ProductCard/ProductCard";
import { NavigationProps } from "../../routes/utils/types";

import * as S from "./HomeStyles";
import { useQueries } from "./utils/useQueries";

export function Home() {
    const navigation = useNavigation<NavigationProps>();
    const theme = useTheme();
    const { data, isLoading, refetch } = useQueries();
    const [favoriteCount, setFavoriteCount] = useState(0);

    async function getFavoritesCount() {
        const response = await AsyncStorage.getItem("@favoriteProducts");
        const favorites = response ? JSON.parse(response) : null;
        if (favorites) {
            setFavoriteCount(favorites.length);
        } else {
            setFavoriteCount(0);
        }
    }

    useEffect(() => {
        getFavoritesCount();
    }, []);

    return (
        <ScreenContent>
            <S.Header>
                <Logo width={90} height={90} />
                <S.IconsContainer>
                    <S.IconButton onPress={() => navigation.navigate("Favorites")}>
                        <AntDesign name="hearto" size={32} color={theme.colors.purple} />
                        {favoriteCount > 0 && <S.IconButtonCount>0</S.IconButtonCount>}
                    </S.IconButton>
                    <S.IconButton>
                        <AntDesign name="shoppingcart" size={32} color={theme.colors.purple} />
                    </S.IconButton>
                </S.IconsContainer>
            </S.Header>

            {isLoading && (
                <S.LoadingContainer>
                    <S.LoadingIndicator size="large" color={theme.colors.purple} />
                </S.LoadingContainer>
            )}

            <FlatList
                data={data?.products}
                renderItem={({ item: product }) => (
                    <ProductCard
                        data={product}
                        onPress={() => navigation.navigate("Details", { data: product })}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                contentContainerStyle={{
                    alignItems: "center",
                }}
                ListEmptyComponent={() =>
                    !isLoading && (
                        <S.EmptyList>
                            <AntDesign name="frowno" size={32} color={theme.colors.purple} />
                            <S.EmptyListText>Nenhum resultado encontrado</S.EmptyListText>
                            <Button
                                onPress={() => refetch()}
                                text="Tentar novamente"
                                type={undefined}
                            />
                        </S.EmptyList>
                    )
                }
            />
        </ScreenContent>
    );
}

import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { FlatList, RefreshControl } from "react-native";
import { useTheme } from "styled-components/native";

import Logo from "../../assets/svgs/logo.svg";
import { Button, ScreenContent } from "../../components";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import { NavigationProps } from "../../routes/utils/types";
import { useStore } from "../../store/store";

import * as S from "./HomeStyles";
import { useQueries } from "./utils/useQueries";

export function Home() {
    const navigation = useNavigation<NavigationProps>();
    const theme = useTheme();
    const { isLoading, refetch, isRefetching } = useQueries();
    const { products, favoriteProducts } = useStore((state) => state);

    return (
        <ScreenContent>
            <S.Header>
                <Logo width={90} height={90} />
                <S.IconsContainer>
                    <S.IconButton onPress={() => navigation.navigate("Favorites")}>
                        <AntDesign name="hearto" size={32} color={theme.colors.purple} />
                        {favoriteProducts?.length > 0 && (
                            <S.IconButtonCount>{favoriteProducts?.length}</S.IconButtonCount>
                        )}
                    </S.IconButton>
                </S.IconsContainer>
            </S.Header>

            {isLoading && (
                <S.LoadingContainer>
                    <S.LoadingIndicator size="large" color={theme.colors.purple} />
                </S.LoadingContainer>
            )}

            <FlatList
                refreshControl={
                    <RefreshControl
                        refreshing={isRefetching}
                        onRefresh={() => refetch()}
                        colors={[theme.colors.purple]}
                    />
                }
                data={products}
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
                    paddingBottom: 32,
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

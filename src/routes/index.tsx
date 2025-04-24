import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Details, Favorites, Home } from "../screens";

import { RootStackParamList } from "./utils/types";

const Stack = createStackNavigator<RootStackParamList>();

export function RootStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen
                    name="Favorites"
                    component={Favorites}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

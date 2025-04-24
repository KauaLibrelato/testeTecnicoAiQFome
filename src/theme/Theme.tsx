import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";

import { themes } from "./utils/constants";
import { ThemeType } from "./utils/enums";

export const ThemeContext = createContext({
    theme: "light",
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState(ThemeType.light);

    useEffect(() => {
        loadTheme();
    }, []);

    async function loadTheme() {
        const savedTheme = await AsyncStorage.getItem("@theme");
        if (savedTheme) {
            setTheme(savedTheme as ThemeType);
        }
    }

    return (
        <ThemeContext.Provider value={{ theme }}>
            <StyledThemeProvider theme={themes[theme]}>{children}</StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

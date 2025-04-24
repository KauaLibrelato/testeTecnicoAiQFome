import { render } from "@testing-library/react-native";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components/native";

import { mockTheme } from "./theme";

export const renderWithTheme = (ui: ReactNode) =>
    render(<ThemeProvider theme={mockTheme}>{ui}</ThemeProvider>);

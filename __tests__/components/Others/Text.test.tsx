import { render } from "@testing-library/react-native";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import { mockTheme } from "../../../__mocks__/theme";

import { Text } from "./../../../src/components";

describe("Text component", () => {
    it("renders children correctly", () => {
        const { getByText } = render(
            <ThemeProvider theme={mockTheme}>
                <Text fontSize={16} color="#000" fontFamily="Arial">
                    Hello, world!
                </Text>
            </ThemeProvider>,
        );
        const textElement = getByText("Hello, world!");
        expect(textElement).toBeTruthy();
    });

    it("applies custom font size", () => {
        const { getByText } = render(
            <ThemeProvider theme={mockTheme}>
                <Text fontSize={20} color="#000" fontFamily="Arial">
                    Hello, world!
                </Text>
            </ThemeProvider>,
        );
        const textElement = getByText("Hello, world!");
        expect(textElement).toHaveStyle({
            fontSize: 20,
        });
    });

    it("applies custom color", () => {
        const { getByText } = render(
            <ThemeProvider theme={mockTheme}>
                <Text fontSize={16} color="#FF6347" fontFamily="Arial">
                    Hello, world!
                </Text>
            </ThemeProvider>,
        );
        const textElement = getByText("Hello, world!");
        expect(textElement).toHaveStyle({
            color: "#FF6347",
        });
    });

    it("applies custom font family", () => {
        const { getByText } = render(
            <ThemeProvider theme={mockTheme}>
                <Text fontSize={16} color="#000" fontFamily="Roboto">
                    Hello, world!
                </Text>
            </ThemeProvider>,
        );
        const textElement = getByText("Hello, world!");
        expect(textElement).toHaveStyle({
            fontFamily: "Roboto",
        });
    });

    it("uses default values when no props are passed", () => {
        const { getByText } = render(
            <ThemeProvider theme={mockTheme}>
                <Text>Hello, world!</Text>
            </ThemeProvider>,
        );
        const textElement = getByText("Hello, world!");
        expect(textElement).toHaveStyle({
            fontSize: 16,
            color: mockTheme.colors.primary,
            fontFamily: "Arial",
        });
    });
});

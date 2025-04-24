import { fireEvent } from "@testing-library/react-native";
import React from "react";
import { Keyboard, Text } from "react-native";

import { renderWithTheme } from "../../../__mocks__/renderComponenteWithTheme";
import { ScreenContent } from "../../../src/components";

describe("ScreenContent", () => {
    it("should render children correctly", () => {
        const { getByText } = renderWithTheme(
            <ScreenContent>
                <Text>Test Content</Text>
            </ScreenContent>,
        );
        expect(getByText("Test Content")).toBeTruthy();
    });

    it("should render scrollable container when isScrollable is true", () => {
        const { getByTestId } = renderWithTheme(
            <ScreenContent isScrollable>
                <Text>Scrollable Content</Text>
            </ScreenContent>,
        );

        const scrollView = getByTestId("scrollable-container");
        expect(scrollView).toBeTruthy();
    });

    it("should render non-scrollable container when isScrollable is false", () => {
        const { getByTestId } = renderWithTheme(
            <ScreenContent isScrollable={false}>
                <Text>Non-scrollable Content</Text>
            </ScreenContent>,
        );

        const view = getByTestId("non-scrollable-container");
        expect(view).toBeTruthy();
    });

    it("should dismiss the keyboard when TouchableWithoutFeedback is pressed", () => {
        const mockDismiss = jest.spyOn(Keyboard, "dismiss");
        const { getByTestId } = renderWithTheme(
            <ScreenContent>
                <Text>Test Content</Text>
            </ScreenContent>,
        );

        fireEvent.press(getByTestId("dismiss-button"));
        expect(mockDismiss).toHaveBeenCalled();
    });
});

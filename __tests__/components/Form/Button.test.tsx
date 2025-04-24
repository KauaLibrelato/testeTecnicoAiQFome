import { fireEvent } from "@testing-library/react-native";

import { renderWithTheme } from "../../../__mocks__/renderComponenteWithTheme";
import { mockTheme } from "../../../__mocks__/theme";
import { Button } from "../../../src/components";
import { EButtonType } from "../../../src/infra";

describe("Button Component", () => {
    describe("Rendering and Styles", () => {
        it("should render a filled button with text", () => {
            const { getByText } = renderWithTheme(
                <Button
                    text="Click me"
                    type={EButtonType.FILL}
                    bgColor="purple"
                    colorText="white"
                />,
            );
            const button = getByText("Click me");
            expect(button).toBeTruthy();
        });

        it("should render an outline button with text", () => {
            const { getByText } = renderWithTheme(
                <Button
                    text="Click me"
                    type={EButtonType.OUTLINE}
                    bgColor="purple"
                    colorText="white"
                />,
            );
            const button = getByText("Click me");
            expect(button).toBeTruthy();
        });
    });

    describe("Button behavior", () => {
        it("should apply theme primary color when bgColor is not provided for filled button", () => {
            const { getByTestId } = renderWithTheme(
                <Button
                    text="Click me"
                    type={EButtonType.FILL}
                    colorText="white"
                    testID="button"
                />,
            );
            const buttonContainer = getByTestId("button");
            expect(buttonContainer).toHaveStyle({ backgroundColor: mockTheme.colors.primary });
        });

        it("should apply theme primary color when bgColor is not provided for outline button", () => {
            const { getByTestId } = renderWithTheme(
                <Button
                    text="Click me"
                    type={EButtonType.OUTLINE}
                    colorText="white"
                    testID="button"
                />,
            );
            const buttonContainer = getByTestId("button");
            expect(buttonContainer).toHaveStyle({ borderColor: mockTheme.colors.primary });
        });

        it("should disable button and apply opacity when disabled is true", () => {
            const { getByTestId } = renderWithTheme(
                <Button
                    text="Click me"
                    type={EButtonType.FILL}
                    colorText="white"
                    disabled
                    testID="button"
                />,
            );
            const buttonContainer = getByTestId("button");
            expect(buttonContainer).toHaveStyle({ opacity: 0.5 });
        });

        it("should call the onPress callback when button is clicked", () => {
            const onPressMock = jest.fn();
            const { getByText } = renderWithTheme(
                <Button
                    text="Click me"
                    type={EButtonType.FILL}
                    colorText="white"
                    onPress={onPressMock}
                />,
            );
            const button = getByText("Click me");
            fireEvent.press(button);
            expect(onPressMock).toHaveBeenCalledTimes(1);
        });
    });

    describe("Custom Colors", () => {
        it("should apply custom background color when bgColor is provided for filled button", () => {
            const { getByTestId } = renderWithTheme(
                <Button
                    text="Click me"
                    type={EButtonType.FILL}
                    bgColor="green"
                    colorText="white"
                    testID="button"
                />,
            );
            const buttonContainer = getByTestId("button");
            expect(buttonContainer).toHaveStyle({ backgroundColor: "green" });
        });

        it("should apply custom border color when bgColor is provided for outline button", () => {
            const { getByTestId } = renderWithTheme(
                <Button
                    text="Click me"
                    type={EButtonType.OUTLINE}
                    bgColor="red"
                    colorText="white"
                    testID="button"
                />,
            );
            const buttonContainer = getByTestId("button");
            expect(buttonContainer).toHaveStyle({ borderColor: "red" });
        });
    });

    describe("Text Style", () => {
        it("should apply custom text color when colorText is provided", () => {
            const { getByText } = renderWithTheme(
                <Button
                    text="Click me"
                    type={EButtonType.FILL}
                    bgColor="purple"
                    colorText="yellow"
                />,
            );
            const buttonText = getByText("Click me");
            expect(buttonText).toHaveStyle({ color: "yellow" });
        });

        it("should apply default text color when colorText is not provided", () => {
            const { getByText } = renderWithTheme(
                <Button text="Click me" type={EButtonType.FILL} bgColor="purple" />,
            );
            const buttonText = getByText("Click me");
            expect(buttonText).toHaveStyle({ color: mockTheme.colors.background });
        });
    });
});

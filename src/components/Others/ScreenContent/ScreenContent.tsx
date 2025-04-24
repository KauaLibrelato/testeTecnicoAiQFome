import React from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollViewProps,
    TouchableWithoutFeedback,
    View,
    ViewProps,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import * as S from "./ScreenContentStyles";
import { IScreenContentProps } from "./utils/types";

export function ScreenContent({
    children,
    isScrollable = false,
    ...props
}: IScreenContentProps & ScrollViewProps & ViewProps) {
    return (
        <SafeAreaView style={{ flex: 1 }} testID="screen-content">
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                testID="keyboard-avoiding-view"
            >
                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}
                    accessible={false}
                    testID="dismiss-button"
                >
                    <View testID="touchable-container" style={{ flex: 1 }}>
                        {isScrollable ? (
                            <S.ContainerScroll
                                testID="scrollable-container"
                                {...(props as ScrollViewProps)}
                            >
                                {children}
                            </S.ContainerScroll>
                        ) : (
                            <S.Container
                                testID="non-scrollable-container"
                                {...(props as ViewProps)}
                            >
                                {children}
                            </S.Container>
                        )}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

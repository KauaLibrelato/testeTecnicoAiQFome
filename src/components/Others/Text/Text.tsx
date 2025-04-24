import React from "react";

import * as S from "./TextStyles";
import { ITextProps } from "./utils/types";

export function Text({ children, ...rest }: ITextProps) {
    return (
        <S.Text maxFontSizeMultiplier={1.2} {...rest}>
            {children}
        </S.Text>
    );
}

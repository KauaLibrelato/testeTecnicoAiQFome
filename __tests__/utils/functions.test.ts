import { capitalizeFirstLetter, formatCurrency } from "../../src/utils/functions";

describe("Geral App Function", () => {
    describe("capitalizeFirstLetter function", () => {
        it("capitalizes the first letter of a string", () => {
            expect(capitalizeFirstLetter("hello")).toBe("Hello");
        });

        it("returns an empty string when no text is provided", () => {
            expect(capitalizeFirstLetter()).toBe("");
        });

        it("capitalizes the first letter even if the text is already capitalized", () => {
            expect(capitalizeFirstLetter("Hello")).toBe("Hello");
        });

        it("capitalizes the first letter of a string with multiple words", () => {
            expect(capitalizeFirstLetter("hello world")).toBe("Hello world");
        });
    });

    describe("formatCurrency function", () => {
        it("formats a number as currency", () => {
            expect(formatCurrency(1234.56)).toEqual("R$ 1.234,56");
        });

        it("formats a negative number as currency", () => {
            expect(formatCurrency(-1234.56)).toEqual("-R$ 1.234,56");
        });

        it("returns 'R$ 0,00' for NaN values", () => {
            expect(formatCurrency(NaN)).toBe("R$ 0,00");
        });

        it("returns 'R$ 0,00' for undefined values", () => {
            expect(formatCurrency(undefined)).toBe("R$ 0,00");
        });
    });
});

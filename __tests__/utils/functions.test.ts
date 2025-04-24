import { capitalizeFirstLetter } from "../../src/utils/functions";

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
});

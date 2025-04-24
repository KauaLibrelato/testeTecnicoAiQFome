module.exports = {
    root: true,
    extends: ["universe/native"],
    ignorePatterns: [".config/*"],
    rules: {
        "react-hooks/exhaustive-deps": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "no-console": "error",
        "arrow-body-style": ["error", "as-needed"],
        "@typescript-eslint/no-empty-function": "off",
        "import/prefer-default-export": "off",
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
        "import/order": [
            "error",
            {
                groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
                "newlines-between": "always",
            },
        ],
    },
};

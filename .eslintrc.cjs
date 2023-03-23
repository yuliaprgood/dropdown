module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "airbnb/hooks",
        "airbnb-typescript",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "overrides": [],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json",

    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier",
    ],
    "rules": {
        "react/react-in-jsx-scope": 0,
        "react/function-component-definition": "off",
        "import/prefer-default-export": "off",
        "prettier/prettier": [
            "error",
            {
                "trailingComma": "all",
                "tabWidth": 4,
                "singleQuote": true,
                "bracketSpacing": true
            }
        ],
    }
}

const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
  extends: [
    require.resolve("@vercel/style-guide/eslint/node"),
    require.resolve("@vercel/style-guide/eslint/typescript"),
    "prettier",
  ],
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  rules: {
    "no-console": "warn",
    "import/no-named-as-default": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    eqeqeq: ["error", "smart"],
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        allowNumber: true,
      },
    ],
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index"],
          "type",
          "unknown",
        ],
        pathGroupsExcludedImportTypes: [],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        distinctGroup: false,
        "newlines-between": "always",
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
};

const { readGitignoreFiles } = require("eslint-gitignore");

module.exports = {
  root: true,
  extends: ["@arcgis/eslint-config"],
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    // Find all .gitignore and .prettierignore files in any directory outside
    // of node_modules, and make ESLint use them as ignore files
    ...readGitignoreFiles({
      cwd: __dirname,
      patterns: ["**/.gitignore", "**/.prettierignore", "!**/node_modules/**"],
    }),
    // Because of typescript-eslint, files that are not in tsconfig.json can
    // not be in .eslintrc
    // See https://typescript-eslint.io/linting/troubleshooting/#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file
    "*.js",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["@arcgis/eslint-config/lumina"],
      rules: {},
    },
  ],
};

import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["eslint", "typescript", "unicorn"],
  categories: {
    correctness: "warn",
  },
  rules: {
    "eslint/no-unused-vars": "error",
  },
  options: {
    typeAware: true,
    typeCheck: true,
    maxWarnings: 10,
  },
  ignorePatterns: ["dist/**", ".astro/**"],
});

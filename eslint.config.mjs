import js from "@eslint/js";
import globals from "globals";

export default [
    {
        ignores: ["js/md5.js"],
    },
    {
        files: ["js/**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "script",
            globals: globals.browser,
        },
        rules: {
            ...js.configs.recommended.rules,
            "no-unused-vars": "off",
        },
    },
];
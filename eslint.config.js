import js from "@eslint/js"
import globals from "globals"
import pluginVue from "eslint-plugin-vue"
import { defineConfig } from "eslint/config"

export default defineConfig([
    // General JS / Vue files
    {
        files: ["**/*.{js,mjs,cjs,vue}"],
        plugins: { js },
        extends: ["js/recommended"],
        languageOptions: {
            globals: globals.browser
        }
    },

    // Vue essential rules
    pluginVue.configs["flat/essential"],

    // Cypress tests
    {
        files: ["cypress/**/*.js"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.mocha,
                cy: "readonly",
                Cypress: "readonly"
            }
        }
    }
])

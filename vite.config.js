import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Components from "unplugin-vue-components/vite"
import { BootstrapVueNextResolver } from "bootstrap-vue-next"
import { fileURLToPath, URL } from "node:url"

export default defineConfig({
    base: "/Grupp5/",
    plugins: [
        vue({
            template: {
                transformAssetUrls: {
                    // Default HTML elements (must be re-declared when overriding)
                    img: ["src", "srcset"],
                    image: ["xlink:href", "href"],
                    use: ["xlink:href", "href"],
                    source: ["src", "srcset"],
                    video: ["src", "poster"],
                    audio: ["src"],
                    // BootstrapVue Next components
                    "b-img": ["src"],
                    "b-card": ["img-src"]
                }
            }
        }),
        Components({
            resolvers: [BootstrapVueNextResolver()]
        })
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    }
})

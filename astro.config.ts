// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import tailwindConfig from './tailwind.config.js';


// https://astro.build/config
export default defineConfig({
    prefetch: true,
    vite: {
        plugins: [tailwindcss(tailwindConfig)],
    },
    experimental: {
        svg: true,
    },
});

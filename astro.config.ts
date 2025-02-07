// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
    prefetch: true,
    integrations: [vue({ appEntrypoint: '/src/pages/_app' })],
});

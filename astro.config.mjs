import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [solidJs(), tailwind()],
    output: 'static',
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules/three')) {
                        return 'threejs-vendor';
                    }
                    if (id.includes('node_modules/gsap')) {
                        return 'gsap-vendor';
                    }
                }
            }
        }
    }
});

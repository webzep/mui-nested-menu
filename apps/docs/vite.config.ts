/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, PluginOption, splitVendorChunkPlugin } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
    const plugins: PluginOption[] = [react(), splitVendorChunkPlugin(), viteTsconfigPaths(), svgrPlugin()];

    return {
        build: {
            outDir: 'dist',
        },
        plugins,
        resolve: {
            alias: {
                '@/': path.resolve(__dirname, 'src/'),
            },
        },
        server: {
            host: true,
            port: 1000,
        },
    };
});

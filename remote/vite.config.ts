import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';
import { dependencies } from './package.json';

// https://vite.dev/config/
export default defineConfig(() => ({
	plugins: [
		react(),
		federation({
			name: 'board ',
			filename: 'remoteEntry.js',
			exposes: {
				'./page': './src/widgets/board/index.ts',
			},
			shared: {
				react: {
					requiredVersion: dependencies.react,
					singleton: true,
				},
				'react-dom': {
					requiredVersion: dependencies['react-dom'],
					singleton: true,
				},
				'react-router-dom': {
					requiredVersion: dependencies['react-router-dom'],
					singleton: true,
				},
			},
		}),
	],
	build: {
		target: 'esnext',
	},
}));

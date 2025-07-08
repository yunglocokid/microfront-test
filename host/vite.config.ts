import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';
import { dependencies } from './package.json';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		federation({
			name: 'host',
			remotes: {
				board: {
					type: 'module',
					name: 'board',
					entry: 'http://localhost:5001/remoteEntry.js',
				},
			},
			filename: 'remoteEntry.js',
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
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
	base: './dist',
	plugins: [react()],
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:3001',
			},
		},
	},
});

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	/** Used for canonical URLs, Open Graph, and JSON-LD. Change if the production domain changes. */
	site: 'https://fastfood-niki.vercel.app',
	vite: {
		plugins: [tailwindcss()],
	},
});
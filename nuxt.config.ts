// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
	modules: ['@nuxt/eslint', '@nuxt/icon'],
	ssr: true,
	devtools: { enabled: true },
	runtimeConfig: {
		public: {
		},
	},
	app: {
		head: {
			title: 'Nuxt 4 Training',
			meta: [
				{
					name: 'description',
					content: 'This is a sample description for the Nuxt Training application.',
				},
			],
		},
		pageTransition: { name: 'fade', mode: 'out-in' },
	},
	css: ['~/assets/styles/tailwind.css', '~/assets/styles/main.scss'],
	compatibilityDate: '2025-07-15',
	vite: {
		plugins: [tailwindcss()],
	},
	eslint: {
		config: {
			standalone: false, // Required when using ESLint with antfu
		},
	},
});

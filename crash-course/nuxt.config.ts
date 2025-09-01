// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	modules: ["@nuxt/eslint"],
	ssr: true,
	devtools: { enabled: true },
	app: {
		pageTransition: { name: "fade", mode: "out-in" },
	},
	css: ["~/assets/styles/main.scss"],
	compatibilityDate: "2025-07-15",
	vite: {
		plugins: [tailwindcss()],
	},
	eslint: {
		config: {
			standalone: false // Required when using ESLint with antfu
		}
	}
});

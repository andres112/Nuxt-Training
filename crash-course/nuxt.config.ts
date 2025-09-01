// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	modules: ["@nuxt/eslint", "@nuxt/test-utils"],
	devtools: { enabled: true },
	ssr: true,
	app: {
		pageTransition: { name: "slide-up", mode: "out-in" },
	},
	css: ["~/assets/styles/main.scss"],
	compatibilityDate: "2025-07-15",
	eslint: {
		config: {
			stylistic: {
				semi: true,
				quotes: "double",
				commaDangle: "always-multiline",
				indent: "tab",
			},
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});

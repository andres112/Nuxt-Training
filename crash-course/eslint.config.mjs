import antfu from "@antfu/eslint-config";

// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
// https://github.com/antfu/eslint-config?tab=readme-ov-file

export default withNuxt(
	antfu(
		{
			type: "app",
			vue: true,
			typescript: true,
			formatters: true,
			stylistic: {
				semi: true,
				quotes: "double",
				indent: "tab",
			},
		},
		{
			rules: {
				"ts/consistent-type-definitions": ["error", "type"],
				"no-console": "warn",
				"antfu/no-top-level-await": ["off"],
				"node/prefer-global/process": ["off"],
				"node/no-process-env": ["off"],
				"perfectionist/sort-imports": [
					"error",
					{
						tsconfigRootDir: ".",
					},
				],
				"unicorn/filename-case": [
					"error",
					{
						case: "kebabCase",
						ignore: [/\.md$/u],
					},
				],
			},
		},
	),
);

import { z } from "zod"; // regular dependency

const EnvSchema = z.object({
	NODE_ENV: z.enum(["development", "test", "production"]),
	NUXT_MAP_API_KEY: z.string(),
	NUXT_PUBLIC_BASE_URL: z.string(),
});

export default defineNitroPlugin(() => {
	const parsed = EnvSchema.safeParse(process.env);
	if (!parsed.success) {
		const issues = parsed.error.issues
			.map(i => `${i.path.join(".")}: ${i.message}`)
			.join("\n - ");
		console.error(`❌ Invalid environment:\n - ${issues}`);
		process.exit(1);
	}
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	pages: true,
	modules: [
		"nuxt-icon",
		"@nuxtjs/tailwindcss",
		"@nuxtjs/supabase",
		"@pinia/nuxt",
		"@vite-pwa/nuxt",
	],
	runtimeConfig: {
		public: {
			bucketUrl: process.env.BUCKET_URL,
			supabase: {
				url: process.env.SUPABASE_URL,
				key: process.env.SUPABASE_KEY,
				redirect: true,
				redirectOptions: {
					callback: "/",
					login: "/auth",
				},
			},
		},
	},
	devtools: { enabled: true },
	tailwindcss: {
		exposeConfig: true,
	},
});

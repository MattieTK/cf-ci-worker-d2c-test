import { env } from "cloudflare:workers";

export default {
	async fetch() {
		const row = await env.DB.prepare("SELECT 1 AS ok").first<{ ok: number }>();
		return new Response(`Hello ${env.WORLD}! D1 says ${row?.ok}.`);
	},
} satisfies ExportedHandler;

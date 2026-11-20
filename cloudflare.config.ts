import { bindings, defineConfig } from "cf/config";
import * as entrypoint from "./src/index.ts" with { type: "cf-worker" };

export default defineConfig({
	worker: {
		name: "worker",
		compatibilityDate: "2026-10-06",
		entrypoint,
		env: {
			WORLD: bindings.text("World"),
			DB: bindings.d1({ name: "cf-ci-worker-db" }),
		},
	},
});

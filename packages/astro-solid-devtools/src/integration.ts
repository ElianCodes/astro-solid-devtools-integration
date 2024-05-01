import { defineIntegration, addVitePlugin } from "astro-integration-kit";
import devtools from "solid-devtools/vite";

export default defineIntegration({
	name: "astro-solid-devtools",
	setup() {
		return {
			hooks: {
				"astro:config:setup": (params) => {
					if (params.command === "dev") {
						addVitePlugin(params, { plugin: devtools({ autoname: true }) });
						params.injectScript("page", 'import "solid-devtools";');
					}
				},
			},
		};
	},
});

import { defineConfig } from "astro/config";
import AstroSolidDevtools from "astro-solid-devtools";
import solidJs from "@astrojs/solid-js";

export default defineConfig({
	integrations: [AstroSolidDevtools(), solidJs()],
});

import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [sveltekit()],
    base: "/AuctionHub-ui/",
    // build: {
    //   outDir: "./dist",
    // },
});

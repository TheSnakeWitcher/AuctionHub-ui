// import { sveltekit } from "@sveltejs/kit/vite";
// import { defineConfig } from "vite";
//
// export default defineConfig({
//     plugins: [sveltekit()],
//     base: "/AuctionHub-ui/",
//     // build: {
//     //   outDir: "./dist",
//     // },
// });


import adapter from '@sveltejs/adapter-static';

export default {
    kit: {
        adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: 'build',
            assets: 'build',
            fallback: undefined,
            precompress: false,
            strict: true
        })
    }
};

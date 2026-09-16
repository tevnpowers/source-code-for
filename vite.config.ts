import adapter from '@sveltejs/adapter-node';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter(),
			typescript: {
				config: (config) => {
					config.include.push('../drizzle.config.ts');
				}
			}
		})
	],
	/*
	ssr: {
		noExternal: [],
		// Tell Vite to keep libsql external so it loads natively
		external: ['@libsql/client', '@libsql/darwin-x64'] 
	},
	build: {
		rollupOptions: {
		// Tell Rollup directly to ignore bundling it
		external: ['@libsql/client', '@libsql/darwin-x64'], 
		},
	},
	*/
	/*
	build: {
		commonjsOptions: {
			dynamicRequireTargets: ["@libsql/client", "@libsql/darwin-x64"]
		},
		rollupOptions: {
			external: ["@libsql/client", "@libsql/darwin-x64"],
		}
	}
	*/
});

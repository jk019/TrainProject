import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path-browserify';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import inject from '@rollup/plugin-inject';

export default defineConfig({
	plugins: [sveltekit()],
	
	/* build: {
		rollupOptions: {
		  external: ['fsevents']
		}
	  } */
});


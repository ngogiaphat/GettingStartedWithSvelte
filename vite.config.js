import {sveltekit} from '@sveltejs/kit/vite';
/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
};
export default config;
// import {defineConfig} from 'vitest/config';
// import {sveltekit} from '@sveltejs/kit/vite';
// export default defineConfig({
// 	plugins: [sveltekit()],
// 	test: {
// 		include: ['src/**/*.{test, spec}.{js, ts}']
// 	},
// });
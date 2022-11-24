import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer'
import { imagePreprocessor } from 'svimg';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [imagePreprocessor({
		inputDir: 'static',
		outputDir: 'static/generated',
		webp: true,
		avif: true
	}), preprocess({
		postcss: {
			plugins: [autoprefixer()]
		}
	})],

	kit: {
		adapter: adapter()
	}
};

export default config;

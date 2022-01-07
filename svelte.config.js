import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import slug from 'rehype-slug';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],
	preprocess: [
		preprocess(),
		mdsvex({
			rehypePlugins: [slug],
			layout: {
				overviews: './src/lib/layouts/overviews.svelte',
				reference: './src/lib/layouts/reference.svelte',
				madewithflucoma: './src/lib/layouts/madewithflucoma.svelte'
			}
		})
	],
	kit: {
		adapter: adapter(),
		target: '#svelte'
	}
};

export default config;

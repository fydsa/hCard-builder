import { defineConfig } from 'cypress';
import path from 'path';

export default defineConfig({
	component: {
		devServer: {
			framework: 'next',
			bundler: 'webpack',
			webpackConfig: {
				resolve: {
					alias: {
						'@components': path.resolve(
							__dirname,
							'./src/components'
						),
					},
				},
			},
		},
	},
	e2e: {
		setupNodeEvents(on, config) {
			require('@cypress/code-coverage/task')(on, config);
			return config;
		},
	},
});

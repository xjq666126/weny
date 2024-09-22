import uni from '@dcloudio/vite-plugin-uni';
import path from 'path';
import { ConfigEnv, defineConfig } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv) => ({
	plugins: [
		uni(),
		viteMockServe({
			mockPath: './src/mock',
			watchFiles: true,
			enable: mode === 'development', // 开发环境开启mock
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src/'),
		},
	},
	build: {
		// 启用sourceMap
		sourcemap: true,
	},
}));

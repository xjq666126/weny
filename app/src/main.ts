import * as Pinia from 'pinia';
import { createSSRApp } from 'vue';
import App from './App.vue';

// 设置全局样式
export function createApp() {
	const app = createSSRApp(App);
	app.use(Pinia.createPinia());
	return {
		app,
		Pinia,
	};
}

import { getGlobalData } from './common';
import configService from './config.service';

export type IRequestParams = {
	[name: string]: any;
};
// api 返回的数据格式
export type IRequestResult = {
	code: number;
	message: string;
	data: any;
};

export type IResData = Record<string, any>;

const httpInterceptors = {
	invoke(options: UniApp.RequestOptions) {
		// 请求拦截器
		// 添加请求头 token
		options.header = Object.assign(options.header || {}, {
			token: getGlobalData('token'),
			// 设置请求每次都是不同的标识id
			requestId: Date.now(),
			// 环境
			// env: process.env.ENV_TYPE,
		});
		// 超时时间
		options.timeout = 15000;
	},
};
uni.addInterceptor('request', httpInterceptors);

export const baseRequest = async <ResultData = IResData>(params: UniApp.RequestOptions) => {
	// process.env.NODE_ENV === 'development' && console.log('请求参数', params);
	// console.log('process.env.NODE_ENV', process.env.NODE_ENV);
	return uni
		.request({ method: params.method, ...params, url: configService.apiUrl + params.url })
		.then((res) => {
			const { statusCode, data: uniSuccessData, errMsg } = res as UniApp.RequestSuccessCallbackResult;
			if (statusCode !== 200) {
				return Promise.reject(new Error(errMsg));
			}
			const { code, data, message } = uniSuccessData as unknown as IRequestResult;
			// 借口返回成功
			if (code === 200) {
				return Promise.resolve(data as ResultData);
			} else {
				// 登录异常 失效 账号
				if (code === 401) {
					uni.reLaunch({ url: '/pages/login/index' });
				}
				return Promise.reject({ code: code, message: message });
			}
		})
		.catch((err) => {
			if (err?.errCode === -1) {
				return Promise.reject({ code: -1, message: '网络请求失败' });
			}
			return Promise.reject({ code: -1, message: err.message || '加载失败' });
		});
};

import { baseRequest, IRequestParams } from './baseRequest';

export const request = async <ReturnData>(
	url: string,
	params: IRequestParams = {},
	env = '',
	errToast?: boolean,
	method?: UniApp.RequestOptions['method']
): Promise<ReturnData> => {
	try {
		const data = await baseRequest<ReturnData>({ url, data: params, method: method || 'POST' });
		return Promise.resolve(data);
	} catch (error) {
		errToast && uni.showToast({ icon: 'none', title: error?.message });
		return Promise.reject(error);
	}
};

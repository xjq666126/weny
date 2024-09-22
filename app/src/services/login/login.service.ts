import { request } from '@/utils/request';

class GlobalService {
	public login = () => {
		return request<string>('login');
	};
}

export const globalService = new GlobalService();

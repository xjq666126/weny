import { GetUserInfoRes } from '@/types/user';
import { request } from '@/utils/request';

class HomeService {
	public getList = (id: string) => {
		return request<GetUserInfoRes>('getList', {
			data: { user_id: id },
		});
	};
}

export const homeService = new HomeService();

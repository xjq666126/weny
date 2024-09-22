import { GetUserInfoRes } from '@/types/user';
import { request } from '@/utils/request';

class UserService {
	public getUserInfo = (id: string) => {
		return request<GetUserInfoRes>('userinfo', {
			action: 'get',
			data: { user_id: id },
		});
	};
}

export const userService = new UserService();

let BASE_URL = '';

if (process.env.NODE_ENV == 'development') {
	BASE_URL = '/api/'; // 开发环境
} else {
	BASE_URL = 'https://mock.com/api/'; // 生产环境一定要提前配置好
}

const configService = {
	apiUrl: BASE_URL,
};

export default configService;

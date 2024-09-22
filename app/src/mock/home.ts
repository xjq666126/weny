import { MockMethod } from 'vite-plugin-mock';
const ListSearchMock: MockMethod = {
	url: '/api/getList',
	method: 'post',
	response: ({ query }) => {
		return {
			code: 200,
			data: {
				list: [{ name: '测试' }],
			},
			message: 'mock api success',
		};
	},
};
export default ListSearchMock;

export type IItemCard = {};

export type IStep = {
	id: string;
	title: string;
	is_finish: boolean;
};

export type IWeekValue = '0' | '1' | '2' | '3' | '4' | '5' | '6'; // 周一 到 周日 的天数（0代表周日）

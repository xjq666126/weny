<template>
	<div class="home">
		<uni-search-bar
			radius="20"
			placeholder="搜索标题、标签、内容"
			clearButton="none"
			cancelButton="always"
			cancel-text="搜索"
			readonly
		/>
		<div class="filter-content"></div>
		<div class="select-tag-content">
			<TagMark name="年度报告" clear :onClick="clickClear"></TagMark
			><TagMark name="年度报告2" inverted="true"></TagMark
			><TagMark name="年度报告3" inverted="true" checked="true"></TagMark>
		</div>
		<div class="list-content">
			<view class="section-list" v-for="(item, index) in List" :key="index">
				<view v-show="!isEmpty(item.data)" v-for="(list, index) in item.data" :key="index">
					<ItemCard :title="list.title" :tag="list.tag" :subText="list.subText" :onClick="triggerItem" />
				</view>
			</view>
		</div>
	</div>
</template>

<script lang="ts" setup>
import ItemCard from '@/components/ItemCard/index.vue';
import TagMark from '@/components/TagMark/index.vue';
import { homeService } from '@/services';
import { onLoad } from '@dcloudio/uni-app';
import isEmpty from 'lodash/isEmpty';
import { reactive, toRefs } from 'vue';
export interface State {
	footerBtnTxt: string;
	day?: number;
	/** 不是当天则会有落雨动画 */
	showAnimaRain?: boolean;
	finishCount: number;
	todayBg: string;
}

const clickClear = () => {
	alert(1);
};

const christmasDay = () => {
	const today = new Date();
	const month = today.getMonth() + 1;
	const day = today.getDate();

	if (month === 12 && day === 25) {
		return true;
	} else {
		return false;
	}
};

// const store = usePlanStore();

// const showed = ref(false);
// const data = reactive<State>({
// 	footerBtnTxt: '',
// 	day: 1,
// 	finishCount: 0,
// 	todayBg: '',
// 	showAnimaRain: false,
// 	animaIcon: christmasDay() ? 'christmas' : 'logo',
// });

const data = reactive({
	List: [
		{
			date: '2024-09-09',
			data: [
				{
					title: '2015]打击滥用非营利组织最佳实践译文.pdf',
					tag: '最佳实践',
					subText: '高风险或其他受监控的司法管辖区',
				},
			],
		},
	],
});

// const init = async () => {
// 	const userId = getStorageSync('user_id');
// 	uni.showLoading({ title: '加载中...', mask: true });

// 	// request('planinfo', { action: 'resetPlan' });

// 	if (!userId) {
// 		const data = await globalService.login();
// 		setGlobalData({ user_id: data });
// 		setStorageSync('user_id', data);

// 		init();
// 		return;
// 	} else {
// 		setGlobalData({ user_id: userId });
// 	}

// 	await fetchUserDay();
// 	fetchPlanList();
// 	fetchTodayBgImg();
// 	uni.hideLoading();
// };

onLoad(async () => {
	const { list } = await homeService.getList();
	uni.showToast({ title: 'message success' });
});

const { List, todayBg, animaIcon, showAnimaRain } = toRefs(data);
</script>

<style lang="scss" scoped>
.home {
	padding: 0;
	background: #fff;

	.today-bg-transparent {
		width: 0;
		height: 0;
	}
	.select-tag-content {
		padding: 8px 12px;
		::v-deep .tag-wrapper {
			margin-right: 4px;
		}
	}

	::v-deep .uni-searchbar__cancel {
		color: #f13858;
		font-size: 14px;
		font-weight: 500;
	}
}
</style>

<template>
	<view class="collect-page">
		<view class="section-list" v-for="(item, index) in List" :key="index">
			<view v-show="!isEmpty(item.data)" v-for="(list, index) in item.data" :key="index">
				<ItemCard :title="list.title" :tag="list.tag" :subText="list.subText" :onClick="triggerItem" />
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import ItemCard from '@/components/ItemCard/index.vue';
import isEmpty from 'lodash/isEmpty';
import { reactive, toRefs } from 'vue';
interface IDataList {
	title: string;
	tag: string;
	subText: string;
}
interface ICardListProps {
	List: Array<{ date: string; data: Array<IDataList> }>;
}
const data = reactive<ICardListProps>({
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

const { List } = toRefs(data);

const triggerItem = () => {
	alert(1);
};

const navigateToPage = (path: string) => {
	uni.navigateTo({
		url: path,
	});
};
</script>

<style lang="scss">
.collect-page {
	min-height: 100vh;
	overflow: hidden;
	background-color: #f8f8f8;

	.section-list {
		.time {
			padding-left: 12px;
			font-size: 12px;
			height: 20px;
			line-height: 20px;
		}

		.list-box {
			padding: 0 16px;
			background: #fff;
			.list-box-item {
				height: 84px;
				border-bottom: 1rpx solid #e5e7eb;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
			.title {
				font-size: 16px;
			}
			.list-sub {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 8px;
				.list-sub-box {
					display: flex;
					align-items: center;
					.tag {
						padding: 0 4px;
						height: 20px;
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: 6px;
						background: #dbeafe;
						color: #1e40af;
						font-size: 12px;
						margin-right: 10px;
					}
					.subTitle {
						padding: 0 4px;
						height: 20px;
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: 6px;
						background: #d9f6ee;
						color: #1e40af;
						font-size: 12px;
					}
				}
				.more-image {
					height: 16px;
					width: 16px;
				}
			}
		}
	}
}
</style>

<template>
	<view class="mine-page">
		<view class="list">
			<view v-for="(item, index) in List" :key="index" @tap="navigateToPage(item.path)">
				<view class="list-item">
					<view class="box-left">
						<image class="icon" :src="`/static/mine/${item.icon}.png`" mode="scaleToFill"></image>
						<view>{{ item.name }}</view>
					</view>
					<image class="arrow" src="./assets/arrow.png" mode="scaleToFill" />
					<!-- <image class="slot-image" :src="item.image" mode="widthFix"></image> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue';

interface ICardListProps {
	List: Array<{ name: string; type: string; path: string; icon: string }>;
}

const data = reactive<ICardListProps>({
	List: [
		{
			name: '账户设置',
			type: 'accout-set',
			path: '/pages/user-center/account-set/index',
			icon: 'set',
		},
		{
			name: '近期浏览',
			type: 'history	-record',
			path: '/pages/user-center/history-record/index',
			icon: 'history',
		},
		{
			name: '收藏',
			type: 'collect',
			path: '/pages/user-center/collect/index',
			icon: 'collect',
		},
	],
});

const navigateToPage = (path: string) => {
	uni.navigateTo({
		url: path,
	});
};

const { List } = toRefs(data);
</script>

<style lang="scss">
.mine-page {
	min-height: 100vh;
	overflow: hidden;
	background-color: #f8f8f8;
	padding-top: 16rpx;

	.list {
		background-color: #fff;
		padding: 0px 16px;
		border-radius: 6px;
		// .list-item-box {
		// 	display: flex;
		// 	align-items: center;
		// 	.box-left {
		// 		display: flex;
		// 		align-items: center;
		// 	}
		// }
		.list-item {
			height: 64px;
			display: flex;
			align-items: center;
			border-bottom: 1rpx solid #e5e7eb;
			justify-content: space-between;
			font-size: 16px;
			.box-left {
				display: flex;
				align-items: center;
			}
			.icon {
				width: 32px;
				height: 32px;
				margin-right: 8px;
			}
		}
		.arrow {
			width: 16px;
			height: 16px;
		}
	}
}
</style>

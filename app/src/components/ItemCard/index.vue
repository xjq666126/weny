<template>
	<div class="list-box" @click="handleTap">
		<div class="list-box-item">
			<div class="title">{{ title }}</div>
			<div class="list-sub">
				<div class="list-sub-box">
					<div class="tag">{{ tag }}</div>
					<div class="subTitle">{{ subText }}</div>
				</div>
				<image class="more-image" src="./assets/more.png" mode="widthFix"></image>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
export interface Props {
	title: string;
	tag?: string;
	subText?: string;
	onClick?: () => void;
}

const { title = '', tag = '', subText = '', onClick } = defineProps<Props>();

const handleTap = () => {
	if (onClick) {
		uni.vibrateShort({
			// @ts-ignore
			type: 'heavy',
		});
		onClick && onClick();
	}
};
</script>

<style lang="scss" scoped>
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
</style>

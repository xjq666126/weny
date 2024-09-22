<template>
	<div class="tag-wrapper" :class="{ inverted: inverted, checked: checked }">
		<div class="tag" @click="handleTap">
			<span>{{ name }}</span>
			<div class="tag-clear" v-if="clear" @click="clearTap">
				<image src="./assets/clear.png" mode="widthFix" />
				<!-- <uni-icon name="clear" size="14" color="#fff"></uni-icon> -->
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

export interface Props {
	name: string;
	clear?: boolean; // 是否显示清除按钮
	inverted?: boolean; // 是否空心
	checked?: boolean; // 是否选中
	onClick?: () => void;
	onClearClick?: () => void;
}

const {
	name = '',
	clear = false,
	inverted = false,
	checked = false,
	onClick,
	onClearClick,
} = defineProps<Props>();

const handleTap = () => {
	if (onClick) {
		onClick && onClick();
	}
};

const clearTap = () => {
	if (onClearClick) {
		onClearClick && onClearClick();
	}
};
</script>

<style lang="scss" scoped>
.tag-wrapper {
	display: inline-block;
	font-size: 0;
	border-radius: 32px;
	background: #f3f4f6;

	&.inverted {
		border: 1px solid #d1d5db;
		background: #fff;
		&.checked {
			border: 1px solid #f13858;
			background: #feebee;
			.tag {
				color: #9b0d34;
			}
		}
	}

	.tag-clear {
		width: 16px;
		height: 16px;
		margin-left: 2px;
		image {
			width: 16px;
		}
	}
	.tag {
		padding: 2px 8px;
		border-radius: 32px;
		font-size: 12px;
		color: #374151;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>

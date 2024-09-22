<template>
	<view class="mine-page">
		<uni-list class="list">
			<uni-list-item class="item" title="修改密码" showArrow="true" link> </uni-list-item>
		</uni-list>
		<view class="logoOut">退出登录</view>
	</view>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.mine-page {
	min-height: 100vh;
	overflow: hidden;
	background-color: #f8f8f8;
	padding-top: 8px;
	.list {
		.item {
			::v-deep .uni-list-item__container {
				padding: 18px 16px;
			}
		}
	}
	.logoOut {
		height: 48px;
		line-height: 48px;
		background: #fff;
		font-size: 16px;
		margin-top: 16px;
		color: #f43f5e;
		text-align: center;
	}
}
</style>

<template>
	<view class="content">
		<view>
			<button type="primary" @click="toBrand()">翻牌</button>
			<button type="primary" @click="toDisc()">转盘</button>
			<button type="primary" @click="toDisc()">硬币</button>
			<button type="primary">设置</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello'
		};
	},
	onLoad() {},
	methods: {
		toBrand(){
			uni.navigateTo({
				url: '/pages/brand/brand',
				animationType: 'zoom-out',
				animationDuration: 1000
			});
		},
		toDisc(){
			uni.navigateTo({
				url: '/pages/disc/disc',
				animationType: 'zoom-out',
				animationDuration: 1000
			});
		}
	}
};
</script>

<style>
.content {
	text-align: center;
	height: 400upx;
	margin-top: 200upx;
}
</style>

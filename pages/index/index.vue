<template>
	<view class="index-content">
		<view class="lottery-navs">
			<view class="lottery-nav lottery-nav-disc row-box" @click="toDisc()">
				<view class="flex2">
					<view class="flex1 lottery-title">大转盘</view>
					<view class="flex1 lottery-desc">随机大转盘</view>
				</view>
				<view class="flex1">
					<image src="../../static/img/dice.png" class="lottery-img" mode="aspectFit" ></image>
				</view>
			</view>
			
			<view class="lottery-nav lottery-nav-specie row-box" @click="toSpecie()">
				<view class="flex2">
					<view class="flex1 lottery-title">硬币决策</view>
					<view class="flex1 lottery-desc">Yes or No</view>
				</view>
				<view class="flex1">
					<image src="../../static/img/specie.png" class="lottery-img" mode="aspectFit" ></image>
				</view>
			</view>
			
			<view class="lottery-nav lottery-nav-brand row-box" @click="toBrand()">
				<view class="flex2">
					<view class="flex1 lottery-title">翻牌子</view>
					<view class="flex1 lottery-desc">翻牌子是古代帝王专享的一件事情</view>
				</view>
				<view class="flex1">
					<image src="../../static/img/poker.png" class="lottery-img" mode="aspectFit" ></image>
				</view>
			</view>
			
			<view class="lottery-nav lottery-nav-edit row-box" @click="toEdit()">
				<view class="flex2">
					<view class="flex1 lottery-title">自定义</view>
					<view class="flex1 lottery-desc">自定义主题：真心话大冒险、周末去哪儿、晚上吃什么、该不该表白</view>
				</view>
				<view class="flex1">
					<image src="../../static/img/edit.png" class="lottery-img" mode="aspectFit" ></image>
				</view>
			</view>
		</view>
			
		<view class="lottery-bottom">
			<view class="row-box">
				<view class="flex1 lottery-bottom-item"><image src="../../static/img/spicy-bar.png" mode="aspectFit" class="lottery-bottom-icon"></image><text>赏包辣条</text></view>
				<view class="flex1 lottery-bottom-item"><image src="../../static/img/feedback.png" mode="aspectFit" class="lottery-bottom-icon"></image><text>反馈给我</text></view>
				<view class="flex1 lottery-bottom-item"><image src="../../static/img/about.png" mode="aspectFit" class="lottery-bottom-icon"></image><text>关于我</text></view>
			</view>
			
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello',
			navs:[
			{
			    "name":"翻牌子",
			    "desc":"翻牌子是古代帝王专享的一件事情",
			    "logo":""
			}
			]
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
		},
		toSpecie(){
			uni.navigateTo({
			    url: '/pages/specie/specie',
				animationType: 'zoom-out',
				animationDuration: 1000
			});
		},
		toEdit(){
			uni.navigateTo({
			    url: '/pages/topic/choose/choose',
				animationType: 'zoom-out',
				animationDuration: 1000
			});
		}
	}
};
</script>

<style>
.index-content {
	padding: 0px;
	margin: 0px;
}
.lottery-nav{
	width: 90%;
	height: 150upx;
	margin: 20upx auto;
	padding-top: 20upx;
	padding-left: 25upx;
	padding-bottom: 10upx;
	color: #fff;
	border-radius: 25upx;
}
.lottery-title{
	font-size: 50upx;
}
.lottery-desc{
	font-size: 30upx;
	color: #eee;
}
.lottery-img{
	width: 80%;
	height: 80%;
	float: right;
}
.lottery-nav-disc{
	background: #66CCCC;
}
.lottery-nav-specie{
	background: #FF9999;
}
.lottery-nav-brand{
	background: #FF99CC;
}
.lottery-nav-edit{
	background: #33CC99;
}
.lottery-bottom{
	width: 90%;
	height: 100upx;
	margin: 20upx auto;
	position: absolute;
	bottom: 0upx;
	left: 5%;
	color: #707070;
	text-align: center;
}
.lottery-bottom-icon{
	width: 35upx;
	height: 35upx;
	padding-right: 10upx;
}

.lottery-bottom-item:nth-child(n+2){
	border-left: 4upx solid #ccc;
}
</style>

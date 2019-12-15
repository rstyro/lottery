<template>
	<view class="topic-choose-box">
		<view class="topic-box col-box">
			<view class="topic-name flex1">主题：<text>{{topicName}}</text></view>
			<view class="topic-choose flex1" @click="chooseTopicFun">选择主题</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			chooseTopic: Function,
			topicName: String
		},
		data() {
			return {
				
			}
		},
		methods: {
			chooseTopicFun(){
				this.$emit('chooseTopic');
			}
		}
	}
</script>

<style>
.topic-choose-box{
	text-align: center;
}

.topic-box{
	width: 100%;
	height: 200upx;
}

.topic-choose{
	width: 50%;
	margin: 0upx auto;
	padding: 10upx;
	height: 80upx;
	line-height: 90upx;
	background: #33CC99;
	color: #fff;
	border-radius: 35upx;
}
</style>

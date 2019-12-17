<template>
    <view class="choose-box">
		<!-- 基础用法 -->
		<uni-swipe-action >
			<view v-for="(item,index) of topics" @click="chooseTopic(index)">
				<uni-swipe-action-item  class="topic-li" :options="options" @click="onClick" @change="change" >
					<view class='cont'>{{item.topicName}}</view>
				</uni-swipe-action-item>
			</view>
			
		</uni-swipe-action>

		<view class="row-box">
			<view class="flex1">
				<view class="btn" @click="reset">重置</view>
			</view>
			<view class="flex1">
				<view class="btn">添加主题</view>
			</view>
		</view>
    </view>
	
	 
</template>

<script>
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue'

	import commons from '@/commons/commons.js'; 
	export default {
		components: {
			uniSwipeAction,
			uniSwipeActionItem
		},
	    data() {
	        return {
				isShowTipKey:"isShowTip",
	            topics:[],
				 options:[
					{
						text: '编辑',
						style: {
							backgroundColor: '#007aff'
						}
					}, {
						text: '删除',
						style: {
							backgroundColor: '#dd524d'
						}
					}
				  ]
	        }
	    },
		onLoad() {
			this.isShowOperateTip();
			const cacheTopics = commons.getTopicsByCache();
			if(cacheTopics){
				this.topics=cacheTopics;
			}
		},
	    methods: {
	        chooseTopic(index){
				console.log("index="+index);
				commons.setCurIndex(index);
				uni.navigateBack({});
			},
			onClick(e){
			  console.log('当前点击的是第'+e.index+'个按钮，点击内容是'+e.content.text)
			},
			change(open){
			  console.log('当前开启状态：'+ open)
			},
			isShowOperateTip(){
				const key = this.isShowTipKey;
				const value = uni.getStorageSync(key);
				if(value != 'yes'){
					uni.showModal({
					    title: '提示',
					    content: '主题列表选项左滑可进行编辑',
					 	cancelText:"下次提醒",
					 	confirmText:"不在显示",
					     success: function (res) {
					         if (res.confirm) {
								 // 保存到缓存
					 			 uni.setStorageSync(key, 'yes');
					         }
					     }
					 });
				 }
			},
			reset(){
				commons.reset();
			}
	    }
	}
</script>

<style>
.choose-box{
	padding: 0px 10upx;
}
.btn{
	width: 230upx;
	height: 60upx;
	background: #33CC99;
	color: #fff;
	text-align: center;
	margin: 60upx auto;
	padding: 10upx;
}
.topic-li{
	padding-left: 10upx;
	margin-bottom: 10upx;
}
.cont{
	width: 100%;
	padding: 20upx 0upx;
	border-bottom: 1px solid #ccc;
}
</style>

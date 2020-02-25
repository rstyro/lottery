<template>
	<view>
		<view class="add-box">
			<view class="input-item row-box">
				<view class="title flex1">主题名称：</view>
				<view class="flex2">
					<input class="uni-input" @blur="setTopicName" :value="topic.topicName" confirm-type="done" placeholder="请输入主题名称" />
				</view>
			</view>
			
			<view class="input-item col-box">
				<view class="flex1">选项：</view>
				<view class="flex2">
					 <textarea @blur="setTopicList" :value="topicText" placeholder="选项内容多个用空格隔开,(例如:打游戏 看电影 听音乐)"/>
				</view>
			</view>
			
			<view class="addBtn" @click="addTopic">{{btnName}}</view>

		</view>
	</view>
</template>

<script>
	import commons from '@/commons/commons.js';
	export default {
		data() {
			return {
				topic:{
					topicName:"",
					list:[]
				},
				topicText:"",
				count: 8,
				curIndex:0,
				isEdit:false,
				btnName:"添加"
			}
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			if(option.hasOwnProperty("index")){
				this.curIndex=option.index;
				this.isEdit=true;
				var topics =commons.getTopicsByCache();
				const curTopic = topics[this.curIndex];
				this.topic.topicName=curTopic.topicName;
				this.topic.list=curTopic.list;
				this.topicText=this.appendStr(curTopic.list);
				this.btnName="更新";
			}
		},
		methods: {
			setTopicName(e){
				console.log(e);
				this.topic.topicName=e.detail.value;
			},
			setTopicList(e){
				console.log(e);
				if(e.detail.value){
					this.topicText=e.detail.value;
				}
				var arr = this.topicText.split(" ");
				if(arr.length < this.count){
					if(arr[arr.length-1] == ""){
						arr.push("空");
					}
					var addLength = this.count-arr.length;
					for(var i=0;i < addLength;i++){
						console.log("i:",i);
						arr.push("空");
					}
				}else{
					uni.showModal({
					    title: '提示',
					    content: '内容选项超过'+this.count+"之后选项将自动截取",
					    success: function (res) {
					        if (res.confirm) {
					            console.log('用户点击确定');
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
					});
					// arr = arr.slice(0,this.count);
					arr.splice(this.count);
					console.log("arr:",arr);
				}
				console.log("length2:",arr.length);
				this.topic.list=arr;
			},
			addTopic(){
				console.log(this.topic);
				console.log("isEdit:",this.isEdit);
				if(this.topic.topicName != ""){
					console.log("topic:",this.topic);
					if(this.isEdit){
						commons.editTopicByCache(this.curIndex,this.topic);
					}else{
						commons.addTopicByCache(this.topic);
					}
					uni.navigateBack({
						delta:1
					});
				}
			},
			appendStr(arr){
				var str="";
				for(var i=0;i<arr.length;i++){
					str = str+arr[i]+" ";
				}
				str=str.substring(0, str.length-1);
				return str;
			}
		}
	}
</script>

<style>
	.add-box{
		padding: 20upx;
	}
	.input-item{
		padding: 10upx;
	}
	.input-item .title{
		text-align: left;
	}
	
	.addBtn{
		width: 200upx;
		height: 60upx;
		text-align: center;
		background: #4CD964;
		color: #fff;
		margin: 20upx auto;
	}
</style>

<template>
    <view>
       <!-- 带描述信息 -->
       <uni-list>
           <uni-list-item v-for="(item,index) of topics" :title="item.topicName" :note="item.topicNote"></uni-list-item>
       </uni-list>

		<view class="addTopic">添加主题</view>
    </view>
</template>

<script>
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	    
	export default {
		components: {
			uniList,
			uniListItem
		},
	    data() {
	        return {
	            topics:[{
					topicName:"周末去哪?",
					topicNote:"周末选择困难症",
					list:["去看电影","一起玩游戏"]
				},{
					topicName:"晚上吃啥?",
					topicNote:"不知道吃啥",
					list:["去看电影","一起玩游戏"]
				}]
	        }
	    },
	    methods: {
	        
	    }
	}
</script>

<style>
.choose-box{
	padding: 0px 10upx;
}
.addTopic{
	width: 230upx;
	height: 60upx;
	background: #33CC99;
	color: #fff;
	text-align: center;
	
}
</style>

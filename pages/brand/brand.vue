<template>
	<view class="content">
		<view class="bgbox">
			<view  v-for="(item,index) in brands.list" class="container"  @click="open(index)">
				<view class="brand" v-bind:style="{transform: 'rotateY('+item.frontAngle+'deg)'}">
					<view class="brand-front">
					</view>
				</view>
				<view class="brand" v-bind:style="{transform: 'rotateY('+item.backAngle+'deg)'}">
					<view class="brand-back"><view class="brand-text" >{{item.backText}}</view></view>
				</view>
			</view>
		</view>
                
		<view class="operateBtn row-box">
			<view class="flex1" @click="allOpenBrands">
				<view class="btn">{{openAllBrands}}</view>
			</view>
			<view class="flex1" @click="shuffleBrands">
				<view class="btn">{{shuffleSort}}</view>
			</view>
		</view>
        <topicChoose :topicName="topicName" @chooseTopic="chooseTopicFun"></topicChoose>
	</view>
</template>

<script>
	import topicChoose from '@/components/topic-choose/topic-choose.vue';
export default {
	components: {
		topicChoose
	},
	data() {
		return {
         title:"周末怎么过",
         shuffleSort: "洗牌",
         openAllBrands: "全开",
         allOpen: false,
		 operateState:{
			 open:"全开",
			 close:"全关"
		 },
         brands:{
             times:'1.5s',
             list:[{
                 frontText: "请翻牌",
                 backText:"在家睡觉",
                 isOpen: false,
                 frontAngle: 0,
                 backAngle: -180
             },{
                 frontText: "请翻牌",
                 backText:"在家玩游戏",
                 isOpen: false,
                 frontAngle: 0,
                 backAngle: -180
             },{
                 frontText: "请翻牌",
                 backText:"出去压马路",
                 isOpen: false,
                 frontAngle: 0,
                 backAngle: -180
             },{
                 frontText: "请翻牌",
                 backText:"电影院看电影",
                 isOpen: false,
                 frontAngle: 0,
                 backAngle: -180
             },{
                 frontText: "请翻牌",
                 backText:"在家清理卫生",
                 isOpen: false,
                 frontAngle: 0,
                 backAngle: -180
             },{
                 frontText: "请翻牌",
                 backText:"煲汤做美食",
                 isOpen: false,
                 frontAngle: 0,
                 backAngle: -180
             },{
                 frontText: "请翻牌",
                 backText:"在家看书学习",
                 isOpen: false,
                 frontAngle: 0,
                 backAngle: -180
             },{
                 frontText: "请翻牌",
                 backText:"去景点游玩",
                 isOpen: false,
                 frontAngle: 0,
                 backAngle: -180
             },{
                 frontText: "请翻牌",
                 backText:"再翻一次牌",
                 isOpen: false,
                 frontAngle: 0,
                 backAngle: -180
             }]
         },
		 topicList:{
			 list:[],
			 
		 },
		 topicName:"默认"

     };
	},
	onLoad() {},
	methods: {
	    //翻单个牌
          open(index) {
              this.brands.list[index].isOpen=!this.brands.list[index].isOpen;
              if(this.brands.list[index].isOpen){
                  this.brands.list[index].frontAngle=180;
                  this.brands.list[index].backAngle=0;
              }else{
                  this.brands.list[index].frontAngle=0;
                  this.brands.list[index].backAngle=-180;
              }
          },
          //操作所有牌，全开全关
          operatorBrands(){
              for(var index=0;index<this.brands.list.length;index++){
                  if(this.allOpen){
                      this.openAllBrands=this.operateState.close;
                      this.brands.list[index].isOpen=true;
                      this.brands.list[index].frontAngle=180;
                      this.brands.list[index].backAngle=0;
                  }else{
                      this.openAllBrands=this.operateState.open;
                      this.brands.list[index].isOpen=false;
                      this.brands.list[index].frontAngle=0;
                      this.brands.list[index].backAngle=-180;
                  }
              }
          },
          allOpenBrands(){
              this.allOpen = !this.allOpen;
              this.operatorBrands();
          },
          //洗牌
          shuffleBrands(){
              this.allOpen = false;
              //关牌再洗牌
              this.operatorBrands();
              setTimeout(()=>{
                  this.brands.list = this.shuffleArr(this.brands.list,this.brands.list.length);
              },500)

          },
          shuffleArr(arr, num) {
             var _arr = arr.concat();
             var n = _arr.length;
             var result = [];

             // 先打乱数组
             while(n-- && num--) {
                 var index = Math.floor(Math.random() * n); // 随机位置
                 [_arr[index], _arr[n]] = [_arr[n], _arr[index]]; // 交换数据
                 result.push(_arr[n]); // 取出当前最后的值，即刚才交换过来的值
             }
             return result;
         },
		 chooseTopicFun(){
		 	console.log("num:",num);
		 }
	}
};
</script>

<style>
	page{
		background: #ffe;
	}
.content {
	margin: 0rpx;
	padding: 0upx;
	text-align: center;
}
.bgbox{
	width: 100%;
	margin: 0px auto;
}
.container {
	position: relative;
	width: 30%;
	height: 150px;
	float: left;
	margin-top: 20upx;
	margin-left: 2.5%;
}

.brand{
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	transition: all 1.5s;
	backface-visibility: hidden;
}
.brand-front{
	/*background: #ccc;*/
	width: 100%;
	height: 100%;
	background: url("/static/img/brand-back1.jpg") ;
	background-size:100% 100%;
}
.brand-back{
	background: #C24241;
	width: 100%;
	height: 100%;
	/*background: url("../images/brand-back1.jpg") ;*/
}
.brand-text{
	width: 20px;
	line-height: 24px;
	padding-top: 5px;
	margin: 0px auto;
	color:#fff;
}
.operateBtn{
	clear: both;
}
.btn{
	margin: 40upx auto;
	width: 80%;
	height: 80upx;
	line-height: 80upx;
	color: #fff;
	background: #FF6666;
}

</style>

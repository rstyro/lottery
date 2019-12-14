<template>
	<view class="content">
		<view id="app">
                <view class="container">
                    <view class="circle one">
                        <view class="position-box" v-bind:style="{transform:'rotate('+circles.circle1.initAngle+'deg)', '-webkit-transition-duration': times}">
                            <view v-for="(item, index) in circles.circle1.list" class="other-item"
                                 v-bind:style="{background: item.bgColor, transform: 'rotate('+circles.circle1.avgAngle*(index)+'deg)skewX(45deg)' }">
                                 <span  v-bind:style="{transform: 'rotate(0deg)skewX(-45deg)' }" >{{item.content}}</span>
                             </view>
                        </view>
                    </view>
                    <view class="arrowhead-box">
                        <view class="arrowhead"></view>
                    </view>
                </view>
        
                <view class="btn-box" >
                    <view class="btn" v-on:click="rotateAll">Go</view>
                </view>
                <view style="clear: both;" v-html="result"></view>
        
        </view> 
	</view>
</template>

<script>
export default {
	data() {
		return {
	   circles:{
		   circle1:{
			   number: 8,
			   initAngle: 0,
			   avgAngle: 45,
			   list:[{
					   content: "电影院看电影",
					   bgColor: '#FF99CC'
				   },{
					   content: "给对方刷牙",
					   bgColor: '#FFCCCC'
				   },{
					   content: "逛超市",
					   bgColor: '#FFFF99'
				   },{
					   content: "一起追剧",
					   bgColor: '#CCCCFF'
				   },{
					   content: "一起玩游戏",
					   bgColor: '#FF9966'
				   },{
					   content: "一起听音乐",
					   bgColor: '#FFCC99'
				   },{
					   content: "给对方按摩",
					   bgColor: '#CCFF99'
				   },{
					   content: "一起去菜市场",
					   bgColor: '#CCCCCC'
				   }]
			   }
	   },
	   times:'2s',
	   count: 0,
	   result: ""
	 };
	},
	onLoad() {},
	methods: {
		rotateFun1(){
			this.circles.circle1.initAngle= this.circles.circle1.initAngle+this.randomNum();
		},
	rotateAll(){
		this.count++;
		this.rotateFun1();
		setTimeout(this.showResult, 2000);
	},
	randomNum(){
		return 720+Math.ceil(Math.random()*360);
	},
	//最终旋转的角度
	resultAngle(number){
		if(number == 1){
			// var rsltAng = this.circles.circle1.initAngle-720*this.count;
			var rsltAng = this.circles.circle1.initAngle;
			var angle = Math.ceil(rsltAng/this.circles.circle1.avgAngle);
			angle = angle%this.circles.circle1.list.length;
			angle=this.circles.circle1.list.length-angle;
			if(angle == this.circles.circle1.list.length){
				angle=0;
			}
			console.log("reWard1=",this.circles.circle1.list[angle].content);
			return this.circles.circle1.list[angle].content;
		}
	},
	showResult(){
		   var content1 =this.resultAngle(1);
		   this.result=`<p>结果：${content1}</p>`;
		}
	}
};
</script>

<style>
.content {
	text-align: center;
	height: 400upx;
}
#app{
	height: 700upx;
	width: 700upx;
	margin: 0px auto;
}
.container{
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	border-radius: 50%;
	z-index: 0;
}

.circle{
	 position: absolute;
	 border-radius: 50%;
}

.one{
	width: 98%;
	height: 98%;
	background: #eee;
	z-index: 1;
	top:1%;
	left: 1%;
}
.position-box{
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	border-radius: 50%;
	color: #FFFFFF;
}
.position-box .other-item{
	position: absolute;
	transform-origin: left top;
	width: 50%;
	height: 50%;
	left: 50%;
	top: 50%;

}
.position-box .other-item span{
	display: inline-block;
	text-align: center;
	padding-top: 50upx;
}

.rotate{
	transform:rotate(720deg) ;
	-ms-transform:rotate(720deg);   /* IE 9 */
	-moz-transform:rotate(720deg);  /* Firefox */
	-webkit-transform:rotate(720deg); /* Safari 和 Chrome */
	-o-transform:rotate(720deg);
	-webkit-transition-duration: 3s;
}

.btn{
	width: 230upx;
	height: 90upx;
	padding: 5px 10px;
	color: #fff;
	background: green;
	border-radius: 35upx;
	margin: 50upx auto;
	font-size: 1.8em;
	box-shadow:inset 0px 15px 15px -15px #000,
	             inset 0px -15px 15px -15px #000;
}

.arrowhead-box{
	position: absolute;
	width: 10%;
	height: 10%;
	left: 45%;
	top: 45%;
	z-index: 99;
}
.arrowhead{
	height: 2px;
	width: 400%;
	background: red;
	margin-top: 50%;
	margin-left: 50%;
}

</style>

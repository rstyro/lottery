<template>
	<view class="content">
		    <view id="app">
                <h1>{{title}}</h1>
                <view class="bgbox">
                        <view  v-for="(item,index) in brands.list" class="container"  @click="open(index)">
                            <view class="brand" v-bind:style="{transform: 'rotateY('+item.frontAngle+'deg)'}">
                                <view class="brand-front">
        <!--                            <view class="brand-text" >{{item.frontText}}</view>-->
                                </view>
                            </view>
                            <view class="brand" v-bind:style="{transform: 'rotateY('+item.backAngle+'deg)'}">
                                <view class="brand-back"><view class="brand-text" >{{item.backText}}</view></view>
                            </view>
                        </view>
                </view>
                <h1 @click="shuffleBrands">{{shuffleSort}}</h1>
                <h1 @click="allOpenBrands">{{openAllBrands}}</h1>
        
            </view>
	</view>
</template>

<script>
export default {
	data() {
		return {
         title:"周末怎么过",
         shuffleSort: "洗牌",
         openAllBrands: "全部打开",
         allOpen: false,
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
                 backText:"在家看电影",
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
                      this.openAllBrands="全部关上";
                      this.brands.list[index].isOpen=true;
                      this.brands.list[index].frontAngle=180;
                      this.brands.list[index].backAngle=0;
                  }else{
                      this.openAllBrands="全部打开";
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
                  this.brands.list = shuffleArr(this.brands.list,this.brands.list.length);
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
         }
	}
};
</script>

<style>
.content {
	text-align: center;
	margin-top: 200upx;
}

.bgbox{
	width: 100%;
	height:400px ;
	margin: 40px auto;
	/* background: #37C6C0; */
}
.container {
	position: relative;
	width: 100px;
	height: 150px;
	float: left;
}
.container:nth-child(n+1){
	margin: 25px 30px;
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
</style>

<template>
	<view class="specie-body">
		<view class="specie-box">
			<view class="specie specie-front" :style="{transform:'rotateY('+frontRotate+'deg)'}">
				<text>{{frontText}}</text>
			</view>
			<view class="specie specie-back" :style="{transform:'rotateY('+backRotate+'deg)'}">
				<text>{{frontText}}</text>
			</view>
		</view>
		
		<view @click="rotate" class="run">转动</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				frontText:"正面",
				backText:"反面",
				frontRotate:0,
				backRotate:-180,
			}
		},
		methods: {
			rotate: function () {
				let flag = this.randomNum(0, 1);
				var offset = 180*6;
				if(flag > 0.5){
					offset=offset+180;
				}
				this.frontRotate = this.frontRotate + offset;
				this.backRotate = this.backRotate + offset;
				console.log("flag:",flag);
				console.log("frontRotate:",this.frontRotate);
				console.log("backRotate:",this.backRotate);
			},
			randomNum:function(m,n){
				return Math.random()*(m - n) + n;
			}
		}
	}
</script>

<style>
		.specie-body{
        }

        .specie-box{
            width:300upx;
            height:300upx;
            position: relative;
            margin: 0upx auto;
        }
        .specie {
            width: 100%;
            height: 100%;
            text-align:center;
            line-height:300upx;
            font-size:14px;
            color:#fff;
            border-radius:50%;
            position: absolute;
            left: 0;
            top: 0;
            transition: all 3s;
            backface-visibility: hidden;

        }
        .specie-front{
            background: #ba0;
        }
        .specie-back{
            background: #cccccc;
        }

        .run{
            width: 200upx;
            height: 90upx;
            line-height: 90upx;
            margin: 20upx auto;
            text-align:center;
			background: #4CD964;
        }
</style>

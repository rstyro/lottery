<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/*每个页面公共css */ 
/*flex*/
.col-box{
display:flex;display:-webkit-flex;
flex-direction:column;-webkit-flex-direction:column;
flex-wrap:wrap;-webkit-flex-wrap:wrap;
height:100%;overflow: hidden;
}
.row-box{
display:flex;display:-webkit-flex;
flex-direction:wrap;-webkit-flex-direction:wrap;
flex-wrap:wrap;-webkit-flex-wrap:wrap;
width:100%;overflow: hidden;
}

.flex1{
  flex-grow:1;-webkit-flex-grow:1;
  flex-shrink:1;-webkit-flex-shrink:1;
  flex-basis:0px;-webkit-flex-basis:0px;
}
.flex2{
  flex-grow:2;-webkit-flex-grow:2;
  flex-shrink:1;-webkit-flex-shrink:1;
  flex-basis:0px;-webkit-flex-basis:0px;
}


</style>

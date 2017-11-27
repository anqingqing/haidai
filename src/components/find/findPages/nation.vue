<template>
  <div class="nation">
  	<div class="asktobuyNav">
		<i class="iconfont icon-fanhui" onclick="window.history.go(-1)"></i>
		<span>走到哪购到哪</span>
		</div>
	<ul v-for="(nat,index) in nations" class="nation_data">
		<p class="head">
			<span class="mg">{{ nat.nation }}</span> 
			<span>{{ nat.area }}</span>
			<router-link :to="{name:'shoppingmore',params:{id:index}}"><span class="gd">查看更多<i class="iconfont icon-fanhui return"></i></span></router-link>
		</p>
		<template v-for="(list,index) in nat.lists">
			<li class="data" >
				<div class="nation_img" >
					<img :src="list.imgUrl" alt=""  class="img">
				</div>
				<div class="nation_text">
					<p>{{ list.nationArea }}</p>
					<p>{{ list.message }}</p>
				</div>
			</li>
		</template>
	</ul>
  </div>
</template>

<script>
export default {
  name: 'nation',
  components:{
  },
  data () {
    return {
    	id:0,
       goshopping:[],
       nations:[]
    }
  },
  created(){
    var currentURL=this.HOST+'/data/find.json';
    this.$http.get(currentURL)
    .then(res => {
    	this.goshopping = res.data.goShopping[0];
    	this.nations = this.goshopping.nations;
    })
    .catch(error => {
      
    })
  },
  	computed:{
		idx(){
			var Id=this.$route.path.split('/').splice(3,1)+'';
			this.$store.state.idx=Id;
			return this.$store.state.idx;
		}
		
	}
}
</script>
<style scoped lang="less">
.nation{
	background-color: #F6EAEE;
}
// nav
.asktobuyNav{
		position: relative;
		width: 100%;
		height: 50/50rem;
		line-height: 50/50rem;
		background-color:#FF6B9F;
		text-align: center;
		color: #fff;
		font-size:20/50rem;
	.iconfont{
		position: absolute;
		left:0.4rem;
		font-size:20/50rem;
	}
}
.nation_data{
	padding: 0 10/50rem;
	margin-bottom: 15/50rem;
	background-color: #fff;
	overflow: hidden;
}
.head{
	line-height: 45/50rem;
	color: #323232;
	overflow: hidden;
	.mg{
		font-size: 16/50rem;
	}
	.gd{
		display: block;
		float: right;
		overflow: hidden;
		.icon-fanhui{
			display: block;
			float: right;
			transform:rotate(180deg);
			margin-top: -2/50rem;
		}
	}
}
.data{
	width: 31%;
	float: left;
	.nation_img{
		.img{
			width: 100%;
		}
	}
	.nation_text{
		margin-top: 10/50rem;
		line-height: 16/50rem;
		p:last-child{
			color: #818181;
			font-size: 10/50rem;
			line-height: 14/50rem;
			margin: 5/50rem 0;
			letter-spacing:2/50rem;
		}
	}
}
.data:nth-child(3){
	margin:0 10/50rem;
}

</style>
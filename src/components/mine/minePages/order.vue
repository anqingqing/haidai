<template>
	<div class="order">
		<div class="detailnav">
		    <span onclick="window.history.go(-1)">
		        <i class="iconfont icon-fanhui"></i>
		    </span> 
       	    <span class="toptitle">我的订单</span>
		</div>

		<div  v-for="(good,index) in Order" :key="index" class="box">
			<div class="goods">
				<div class="good_box">
					<div class="good_img"><img :src="good.img" alt=""></div>
					<div class="good_title">
						<p>{{good.title}}</p>
					</div>
				</div>
				
				<div class="total_goods">
					<p class="goods_num">共 <span>{{good.number}}</span> 件商品</p>
					<p class="goods_price">实付款: <span>¥{{good.collect}}</span></p>
				</div>
			</div>
			<div class="goods_btn">
					<p class="pingjia">评价晒单</p>
					<p class="buy">再次购买</p>
			</div>
		</div>

		
		
	</div>
</template>
<script>
	export default{
		name:'order',
		data(){
			return{
				Order:[]
			}
		},
		created(){
			var currentURL=this.HOST+'/data/goods.json';
		    this.$axios.get(currentURL)
		    .then(res => {
		    	this.Order = res.data.items[0].list;
		    	console.log(this.Order);

		    })
		    .catch(error => {
		      console.log(error);
		    })
		  }
	}
</script>
<style scoped lang="less">

.order{
	background-color: #F6EAEE;
	width: 100%;
	height: 100%;
	overflow: hidden;
}

.detailnav{
		width: 100%;
		// height: 60/50rem;
		background: #FF6B9F;
		position: relative;
		overflow: hidden;
		text-align: center;
		padding:20/50rem 0px;
		color: #fff;
		font-size: 18/50rem;
		.toptitle{
			display: inline-block;
			width:120/50rem;
			text-overflow: ellipsis;
			white-space: nowrap;
			vertical-align: top;
			overflow:hidden;
			}
			.icon-fanhui{
			position: absolute;
			left:14/50rem;
			top:20px;
			color: #fff;
			font-size: 20/50rem;
		}
}


.myorder{
	height: 30/50rem;
	line-height: 30/50rem;
	text-align: center;
	font-size: 20/50rem;
	font-weight: bold;
	color: #404040;
	margin: 20/50rem 0;
}

.goods{
	background-color: white;
	margin:20/50rem;
	margin-bottom: 10/50rem;
}

.good_box{
	margin:20/50rem;
	background-color: white;
	overflow: hidden;
}

.good_img,.good_title{
	float: left;
}

.good_img{

	background-color: #F6EAEE;
	width: 100/50rem;
	height: 100/50rem;
	margin-top: 20/50rem;
}

.good_img img{
	width: 100%;
}
.good_title{
	font-size: 18/50rem;
	color: #404040;
	height: 100/50rem;
	line-height: 100/50rem;
	margin-left: 25/50rem;
	width: 150/50rem;
	overflow: hidden;
	text-overflow:ellipsis;
}

.total_goods{
	overflow: hidden;
	height: 20/50rem;
	line-height: 20/50rem;
	padding-bottom: 10/50rem;
}

.goods_num,.goods_price{
	float: left;
	font-size: 17/50rem;
}

.goods_num{
	margin-left: 100/50rem;
	margin-right: 26/50rem;
}

.goods_btn{
	margin-top: 10/50rem;
	overflow: hidden;
	margin-bottom: 10/50rem;
}

.pingjia,.buy{
	float: left;
}

.pingjia{
	margin-left: 180/50rem;
	margin-right: 20/50rem;
	line-height: 20/50rem;
	font-size: 16/50rem;
	border: 1/50rem solid #404040;
	padding: 5/50rem; 
	border-radius: 5/50rem;
	color: #404040;
}

.buy{
	line-height: 20/50rem;
	font-size: 16/50rem;
	border: 1/50rem solid #EA2000;
	padding: 5/50rem; 
	border-radius: 5/50rem;
	color: #EA2000;
}

</style>
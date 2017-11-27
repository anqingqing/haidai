<template>
	<div class="container">

		<div class="detailnav">
		    <span onclick="window.history.go(-1)">
		        <i class="iconfont icon-fanhui"></i>
		    </span> 
       	    <span class="toptitle">优惠券</span>
		</div>

		<div class="box">
			<div class="box_left">
				<span class="fuhao">¥</span> <span class="price">5</span>
				<p class="content">买满50可使用</p>
			</div>
			<div class="box_right">
				<p class="name">店铺东券</p>
				<span>限购[心居专营店]</span>
				<p class="dianpu">店铺商品</p>
				<p class="date">2017.12.19-2017.12.20</p>
			</div>	
		</div>

		<div class="box">
			<div class="box_left">
				<span class="fuhao">¥</span> <span class="price">10</span>
				<p class="content">买满100可使用</p>
			</div>
			<div class="box_right">
				<p class="name">店铺东券</p>
				<span>限购[心居专营店]</span>
				<p class="dianpu">店铺商品</p>
				<p class="date">2017.12.19-2017.12.20</p>
			</div>	
		</div>

		<div class="box">
			<div class="box_left">
				<span class="fuhao">¥</span> <span class="price">20</span>
				<p class="content">买满300可使用</p>
			</div>
			<div class="box_right">
				<p class="name">店铺东券</p>
				<span>限购[心居专营店]</span>
				<p class="dianpu">店铺商品</p>
				<p class="date">2017.12.19-2017.12.20</p>
			</div>	
		</div>

		<div class="box">
			<div class="box_left">
				<span class="fuhao">¥</span> <span class="price">5</span>
				<p class="content">买满100可使用</p>
			</div>
			<div class="box_right">
				<p class="name">店铺东券</p>
				<span>限购[心居专营店]</span>
				<p class="dianpu">店铺商品</p>
				<p class="date">2017.12.19-2017.12.20</p>
			</div>	
		</div>

	</div>
</template>
<script>
	export default{
		name:'youhuijian',
		data(){
			return{
				Order:[]
			}
		},
		created(){
			
		  }
	}
</script>
<style scoped lang="less">

.container{
	background-color: #FAFAFA;
	height: 100%;
}

.detailnav{
		width: 100%;
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

.box{
	margin:20/50rem;
	height: 120/50rem;
	background-color: white;
	overflow: hidden;
	position: relative;
}

.box_left,.box_right{
	float: left;
}

.box_left{
	width: 40%;
	height: 100%;
	background-color:#E6E6E6;
	text-align: center;
	color: white;
}

.fuhao{
	position: absolute;
	font-size: 25/50rem;
	top:30/50rem;
	left: 40/50rem;
}

.price{
	position: absolute;
	font-size: 40/50rem;
	top:14/50rem;
	left: 64/50rem;
	font-weight: bold;
}

.content{
	font-size: 18/50rem;
	margin-top: 80/50rem;
}

.name{
	margin-left: 16/50rem;
	margin-top: 16/50rem;
	color: white;
	font-size: 12/50rem;
	background-color: #E6E6E6;
	width: 56/50rem;
	padding:4/50rem;
	
}

.box_right span{
	margin-left: 80/50rem;
	margin-top: -16/50rem;
	display: block;
	color: #666666;
}
.dianpu{
	margin-top: 10/50rem;
	margin-left: 16/50rem;
	color: #666666;
}

.date{
	margin-top: 10/50rem;
	margin-left: 16/50rem;
	color: #999999;
}





</style>
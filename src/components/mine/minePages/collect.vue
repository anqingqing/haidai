<template>
	<div class="container">

		<div class="detailnav">
		    <span onclick="window.history.go(-1)">
		        <i class="iconfont icon-fanhui"></i>
		    </span> 
       	    <span class="toptitle">我的收藏</span>
		</div>

		<div v-for="(item,index) in Collect" :key="index">
			<div class="box">
				<div class="img_box"><img :src="item.img" alt=""></div>
				<div class="content">
					<p class="title">{{item.title}}</p>
					
				</div>
				<div class="footer">
					<p class="price">{{item.price}}</p>
					<p class="xiangsi">找相似</p>
				</div>
			</div>
		</div>
	
	</div>
</template>
<script>
	export default{
		name:'collect',
		data(){
			return{
				Collect:[]
			}
		},
		created(){
			var currentURL=this.HOST+'/data/message.json';
		    this.$axios.get(currentURL)
		    .then(res => {
		    	this.Collect = res.data.xinxi;
		    	console.log(this.Collect);
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
	width: 100%;
	height: 150/50rem;
	background-color: #eee;
	margin-bottom: 10/50rem;
	overflow: hidden;
}

.img_box{
	width: 40%;
	height: 100%
}
.img_box img{
	width: 90%;
	
}

.img_box,.content{
	float: left;
}
.content{
	width: 50%;
	margin: 5%;
	height: 50%;
}

.title{
	color: #404040;
	font-size: 17/50rem;
	line-height: 22/50rem;
}

.price{
	margin-top: 30/50rem;
	color: #EA2000;
}

.footer{
	width: 50%;
	margin-left:50%;
	margin-top: 20%;
	position: relative;
}

.xiangsi{
	position: absolute;
	top:32/50rem;
	right: 15/50rem;
	border: 1px solid #404040;
	padding: 5/50rem;
	border-radius: 2/50rem;
}







</style>
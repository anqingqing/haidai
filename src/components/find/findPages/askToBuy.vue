<template>
	<div class="asktobuy">
		<!-- 头部标题 -->
		<div class="asktobuyNav">
			<i class="iconfont icon-fanhui" onclick="window.history.go(-1)"></i>
			<span>求购信息</span>
		</div>
		<div class="user" v-for="(list,index) in list">
			<span class="reply">回复</span>
			<div class="user-left">
				<div class="uesr_icon">
					<img :src="list.userIconUrl" alt="">
				</div>
				<div class="user_data">
					<p>{{ list.userName }}</p>
					<div class="data">
						<span>{{ list.postedTime }}</span>
						<span><i class="iconfont icon-dizhi"></i>{{ list.location }}</span>
						</div>
					</div>
				</div>
			<div class="usertext">
				<p>{{ list.userText }}</p>
				<p>{{ list.userText1 }}</p>
			</div>
			<div class="data_img">
				<img :src=" img.imgUrl" alt="呀,服务器开小差啦" v-for="(img,index) in list.images">
			</div>
		</div>
	</div>
</template>

<script>
import '../../../assets/css/font/iconfont.css'
export default {
  name: 'Asktobuy',
  components:{
  },
  data () {
    return {
          // 初始化默认值
          id:0,
          userInfo:{},
          list:[]
	}
},
created(){
   	// 获取后台数据并解析
    var currentURL=this.HOST+'/data/find.json';
    this.$http.get(currentURL)
    .then(res => {
    	// 赋值给初始默认值
    	this.userInfo = res.data.userInfo[0];
    	this.list =this.userInfo.list
    })
    .catch(error => {
    })
  },
   computed:{
  	// 从地址栏获取动态Id
		gyx(){
			this.$store.state.findId=this.$route.path.split('/').splice(3,1)+'';
			this.id=this.$store.state.findId;
		}	
	}
  }
</script>
<style scoped lang="less">
.asktobuy{
	background-color: #F6EAEE;
	font-family: "Reglar";
	.asktobuyNav{
		position: relative;
		width: 100%;
		height: 70/50rem;
		line-height: 70/50rem;
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
	.user{
		overflow: hidden;
		padding: .2rem;
		background-color: #fff;
		margin-bottom: 10px;
		color: #a6a6a6;
		position: relative;
		.reply{
			position: absolute;
			right: 20/50rem;
			top: 10/50rem;
		}
		.user-left{
			overflow: hidden;
			.uesr_icon{
				float: left;
				img{
					width: 40/50rem;
					height: 40/50rem;
					border-radius: 50%;
				}
		}
		.user_data{
			float: left;
			p{	
				margin-top: 5/50rem;
				margin-left: 10/50rem;
				line-height: 16/50rem;
				color: #333333;
			}
			.data{
				span{
					font-size: 10/50rem;
					margin-left:.2rem;
					i{
						color: #FF6B9F;
						margin-right: .1em;
					}
				}
			}	
		}
	}
}
	.usertext{
		width: 100%;
		margin-top: 10px;
		p{
			line-height: 16/50rem
		}
	}
	.data_img{
		margin-top: 10/50rem;
		img{
			width: 30%;
			float: left;
		}
		img:nth-child(2){
			margin: 0 15/50rem;
		}
	}
}
</style>
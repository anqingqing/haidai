<template>
  <div class="loginbox">
  	<div class="wrap">
  		<div class="userIcon"><img src="http://data.allenamy.com/overseashopping/usericon19.png" alt=""></div>

  		<label for=""><i class="iconfont icon-shouji"></i><input type="text" v-model="iphoneNum" ></label>
  		<label for=""><i class="iconfont icon-suo"></i><input type="password" v-model="pwd"></label>
  		<!-- <router-link :to="this.path" class="btn" tag="p" @click.native="login">登录</router-link> -->
  	<!-- 引进的element组件,点击时的提示框 -->
  		<template>
		  <el-button :plain="true" class="btn" @click="login">登录</el-button>
		</template>

  		<p class="tips"><router-link to="reg" tag="span">新人注册</router-link><span>忘记密码?</span></p>
  		<p class="icons"><i class="iconfont icon-QQ"></i><i class="iconfont icon-0023 wxIcon"></i><i class="iconfont icon-sina"></i></p>
  	</div>
    <!--  -->
  </div>
</template>

<script>
import '../../../assets/css/font/iconfont.css'
export default{
  name: 'login',
  data () {
    return{
      iphoneNum:'',
      pwd:''
    }
  },
  methods:{
  	login:function(){
			// this.path = 'mine'  http://localhost:3000/login
			this.$axios.post("http://localhost:3000/login",{
				username:this.iphoneNum
			})
			.then(res => {
				// console.log(res.data);
				// console.log(res);
				if(res.data.length>0){
					if(this.iphoneNum==res.data[0].username&&this.pwd == res.data[0].password){
						
						if(localStorage.getItem('iphoneNum') && localStorage.getItem('pwd')){		
						}else{
							
							localStorage.setItem('iphoneNum',this.iphoneNum);
							localStorage.setItem('pwd',this.pwd);		
						}

						this.$router.push({path:'mine'})
					}if(this.pwd != res.data[0].password){
						// 插件的提示
						this.$message('用户或密码不正确');			
					}					
				}else{
					// console.log("尚未注册");
					this.$message('尚未注册或用户名为空');			
				}
			})
			.catch(error => {
				console.log(error);
			})	
  	}

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.loginbox{
	.wrap{
		width: 230/50rem;
		height: 450/50rem;
		// background-color: #ddd;
		margin:70/50rem auto;
		.userIcon{
			width: 90/50rem;
			height: 90/50rem;
			background-color: #94a2ad;
			margin:0  auto  42/50rem;
			border-radius: 50%;
			text-align: center;
			overflow: hidden;
			img{
				width: 100%;
			}
	    }
	    label{
	    	display: block;
	    	position: relative;
	    	margin-bottom: 30/50rem;
	    	input{
	    		display: block;
		    	width: 200/50rem;
		    	height: 26/50rem;
		    	outline: none;
		    	box-sizing: border-box;
		    	border: none;
		    	margin-left: 26/50rem;
		    	border-bottom: 2px solid #FED6E4;	
		    	color: #333;    	
		    }
		    i{
		    	font-size: 24/50rem;
		    	color: #FF88B0;
		    	position: absolute;
		    	bottom: -3/50rem;
		    }
		    p{
		    	position: absolute;
		    	bottom:-20/50rem;
		    	left: 30/50rem;
		    	font-size: 12/50rem;
		    	color: red;
		    }
		    .pwdTip{
		    	bottom:-30/50rem;
		    }
	    }
	    .btn{
	    	display: block;
	    	width: 190/50rem;
	    	height: 36/50rem;
	    	background-color: #FF88B0;
	    	border-radius: 36/50rem;
			margin:40/50rem auto 25/50rem;
			font-size: 16/50rem;
			letter-spacing:5/50rem;
			color: #666;
	    }
		.tips{
			text-align: center;
			margin-bottom: 60/50rem;
			span{
				padding: 0 30/50rem 0;
				font-size: 14/50rem;
				color: #949494;
			}
		}
		.iconfont{
			font-size: 26/50rem;
		}
		.icons{
			color:#FF88B0;
			margin-left:20/50rem;
			.wxIcon{
				padding: 0 55/50rem;
			}
		}
	
	}
}
</style>

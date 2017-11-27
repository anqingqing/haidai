<template>
  <div class="loginbox">
  	<div class="wrap">
  		<div class="userIcon">注册账号</div>

  		<label for=""><i class="iconfont icon-shouji"></i><input type="text" v-model="iphoneNum" ></label>
  		<label for=""><i class="iconfont icon-suo"></i><input type="password" v-model="pwd"></label>
  		<label for=""><span  class="check">确认密码:</span><input type="password" v-model="rePwd"><p v-if="flag3">!两次密码不一致或密码为空</p></label>

  		<!-- <router-link :to='this.path'  tag="p" class="btn" @click.native="login">注册</router-link> -->
  		<!-- <p class="btn" @click="reg">注册</p>  -->

		<template>
		  <el-button :plain="true" class="btn" @click="reg">注册</el-button>
		</template>
  	</div>
    <!--  -->
  </div>
</template>

<script>
import '../../../assets/css/font/iconfont.css'
export default{
  name: 'reg',
  data () {
    return{
    	flag1:false,
	    flag2:false,
	    flag3:false,
	    iphoneNum:'',
      	pwd:'',
      	rePwd:''  
    }
  },
  methods:{
  	reg:function(){
  		
  		if(this.pwd==this.rePwd && this.pwd!="" && this.rePwd!=''){
  			
  			this.flag3 = false;
            
			this.$axios.post("http://localhost:3000/createuser",{
					username:this.iphoneNum,
					password:this.pwd
			})
			.then(res => {
				// console.log(res.data)		
					if(res.data.msg == "success"){
						this.currentStatus = "注册成功"
						this.$message('注册成功');
						this.$router.push({path:'login'})
					}			
			})
			.catch(error => {
				console.log(error)
			})
		}else{
			this.flag3 = true;
	 }
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
			margin:0  auto  20/50rem;
			text-align: center;
			font-size: 20/50rem;
			color: #FF88B0;
			overflow: hidden;
	    }
	    label{
	    	display: block;
	    	position: relative;
	    	margin-bottom: 35/50rem;
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
		    .check{
		    	color: #FF88B0;
		    	font-size: 14/50rem;
		    }
	    }
	    .btn{
	    	display: block;
	    	width: 190/50rem;
	    	height: 36/50rem;
	    	background-color: #FF88B0;
	    	border-radius: 36/50rem;
	    	text-align: center;
			margin:40/50rem auto 25/50rem;
			font-size: 16/50rem;
	    }
	    .el-button{
	    	outline: none;
	    }
		.iconfont{
			font-size: 26/50rem;
		}
	
	}
}
</style>
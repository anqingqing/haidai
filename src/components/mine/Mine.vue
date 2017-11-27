import Vue from 'vue';
import {Table,
  TableColumn,} from from 'element-ui';

Vue.use(Table)
Vue.use(TableColumn)
<template>
  <div class="Mine">
  	<div>
	   <div class="M-Header">
	   	<p><router-link tag="i"  to='login' class="iconfont icon-shezhi Set" ></router-link></p>
	   	<router-link tag="div" to='login' class="UserImg"><img :src="userInfo[0].userImg" alt=""></router-link>
	   	<p class="UserName">{{userName}}</p>
	   	<p class="Intro"><span>关注</span><span>{{userInfo[0].attention}}</span><span>|</span><span>粉丝</span><span>{{userInfo[0].fans}}</span></p>
	   </div>
	   <ul class="MiconList">
	   		<li><router-link to="shoppingCar" tag="a"><i class="iconfont icon-gouwuche"></i>购物车</router-link></li>
	   		<li><router-link to="order" tag="a"><i class="iconfont icon-dingdanliang"></i>订单</router-link></li>

	   		<li><router-link to="youhuijuan" tag="a"><i class="iconfont icon-shiliangzhinengduixiang1
	购物车
	">
		
	</i>优惠券</router-link></li>

	   		<li><router-link to="collect" tag="a"><i class="iconfont icon-shoucang-copy"></i>收藏</router-link></li>
	   </ul>
		<div class="Mline"></div>
		<div class="M-content">
			<template>
			  <el-tabs v-model="activeName" @tab-click="handleClick">			   
		    <el-tab-pane label="我的分享" name="first">
			    	<Myshare></Myshare>
			    </el-tab-pane>
			    <!--  <el-tab-pane label="" name="first">
			    </el-tab-pane> -->
			    <p class="kong"></p>
			    <el-tab-pane label="我的购买" name="second">
			    	<Myrequst/>
			    </el-tab-pane>
			  </el-tabs>
			</template>
		</div>
		<Footers/>
	</div>
  </div>
</template>

<script>
import Footers from "../Footers.vue";
import Myshare from "./minePages/myshare";
import Myrequst from "./minePages/myrequst.vue"

export default {
  name: 'Mine',
  data () {
    return {
	  activeName: 'first',
	  userName:'',
      userInfo:[{
      	userImg:"http://data.allenamy.com/overseashopping/usericon19.png",
      	attention:120,
      	fans:30
      }
      ]
    }
	  },
	  components:{
	  	Footers,
	  	Myshare,
	  	Myrequst
	  },
	 methods: {
      handleClick(tab, event) {

      }
    },
   created:function(){
    	// console.log(22);
    	this.userName = localStorage.getItem("iphoneNum");
    	// console.log(this.userName);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.M-Header{
	width: 100%;
	height: 214/50rem;
	background: url(http://data.allenamy.com/overseashopping/cdb.png) no-repeat;
	background-size: cover;
	overflow: hidden;
}
.Set{
	float:right;
	padding-right: 14/50rem;
	padding-top: 30/50rem;
	font-size: 25/50rem;
	color: #fff;
}
.UserImg{
	width: 90/50rem;
	height: 90/50rem;
	background-color: #94a2ad;
	margin:0 140/50rem 10/50rem;
	border-radius: 50%;
	text-align: center;
	overflow: hidden;
	margin-top:47/50rem;
	img{
		width: 100%;
	}

}
.kong{
	width: 20%;
}
.UserName{
	color: #fff;
	font:15/50rem bold "微软雅黑";
	text-align: center;
}
.Intro{
	text-align: center;
	padding-top: 10/50rem;
	span{
		font:14/50rem bold "微软雅黑";
		color: #fff;
		padding:0 7/50rem;
	}
}
.MiconList{
	overflow: hidden;
	li{
		
		float: left;
		width: 25%;
		height: 87/50rem;
		margin-left: 0px;
		text-align: center;
		a{  
			display: block;
			box-sizing: border-box;
			position: relative;
			padding-top: 58/50rem;
			color: #8a8a8a;
		}
		i{
			position: absolute;
			top:16/50rem;
			font-size: 36/50rem;
			text-align: center;
			left: 30/50rem;
			color: #ff6b9f;
		}			
	}
}
.Mline{
	width: 100%;
	height: 1px;
	background-color: #ddd;
}
.el-tabs__nav-wrap{
	border: none;
}
</style>
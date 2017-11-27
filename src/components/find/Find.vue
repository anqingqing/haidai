<template>
  <div class="hello">
	<Navs />
	<!-- 求购信息 -->
	<template v-for="(user,index) in userinfo">
		<div class="mb">
		<div class="purchase_information" >
			<p class="userTitle">
				<span class="title">{{ user.title}}</span>
				<router-link :to="{path:'/findview/asktobuy'}"><span class="viewMore">查看更多</span></router-link>
				</p>
				
			</div>
			<div class="user" v-for="(list,index) in user.list">
				<div class="uesr_icon">
					<img :src="list.userIconUrl" alt="">
				</div>
				<div class="user_data">
					<p>{{ list.userName }}</p>
					<p>{{ list.userText }}</p>
			</div>
			<!-- <router-link to=""><i class="iconfont icon-fanhui return"></i></router-link> -->
		</div>
	</div>
</template>
<!-- 热门话题 -->
	<template v-for="(hot,index) in hottopic">
		<div class="mb">
		<div class="purchase_information" >
			<p class="userTitle">
				<span class="title">{{ hot.title}}</span>
				<router-link :to="{path:'/moretopicsview/moretopics'}"><span class="viewMore">查看更多</span></router-link>
				</p>
			</div>
			<div class="user" v-for="(list,index) in hot.list">
				<div class="user_icon hotTopic">
					<img :src="list.gambitUrl" alt="">
				</div>
				<div class="user_data hotTopic_data" >
					<p class="data_title" >{{ list.gambitTitle }}</p>
					<p class="data_num">{{ list.participation }}人参与</p>
			</div>
			<router-link  :to="{name:'gambit',params:{id:index}}"><i class="iconfont icon-fanhui return"></i></router-link>
		</div>
	</div>
</template>
<!-- 走到哪购到哪 -->
	<template v-for="(go,index) in goshopping" >
	<div class="mb">{{idx}}
		<div class="purchase_information" >
			<p class="userTitle">
				<span class="title">{{ go.title}}</span>
				<router-link :to="{path:'/nationview/nations'}"><span class="viewMore">查看更多</span></router-link>
				</p>
			</div>
			<div class="go_img" >
				<li class="go_url" v-for="(list,index) in go.list">
					<a href="javascript:;"><img  :src="list.goUrl" alt=""></a>
				</li>		
		</div>
	</div>
</template>
	<Footers/>
  </div>
</template>
<script>
import Navs from '../Nav';
import Footers from '../Footers';
export default {
  name: 'Find',
  components:{
  	Navs,
  	Footers
  },
  data () {
    return {
    	id:0,
       userinfo:[],
       hottopic:[],
       goshopping:[]

    }
  },
  created(){
    // console.log(this.$store.state.idx)
    var currentURL=this.HOST+'/data/find.json';
    this.$http.get(currentURL)
    .then(res => {
    	this.userinfo = res.data.userInfo;
    	this.hottopic = res.data.hotTopic;
    	this.goshopping = res.data.goShopping;


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
.mb{
	margin-bottom: 10px;
}
.hello{
	background-color: #F6EAEE;
	overflow: hidden;
	height: 100%;
	.purchase_information{
		background-color: #fff;
		padding-left: 10/50rem;
		padding-right: 10/50rem;
		box-sizing: border-box;
		overflow: hidden;
		.userTitle{
			line-height: 25/50rem;
			margin-top: 10/50rem;
			overflow: hidden;
			.title{
				padding: 0 10px;
				border-left: 2px solid #000;
				color: #000;
				}
			.viewMore{
				display: inline-block;
				float: right;
				box-sizing: border-box;
			}
		}
	}
}
.user{
	overflow: hidden;
	background-color: #fff;
	margin-bottom: 1px;
	padding: 5/50rem 10/50rem;
	box-sizing: border-box;
	position: relative;
	.uesr_icon{
		float: left;
		width: 40/50rem;
		height: 40/50rem;
		border-radius: 50%;
		margin-top: 5/50rem;
		img{
			width: 100%;
		}
	}
	.hotTopic{
		float: left;
		width: 126/50rem;
		height: 126/50rem
	}
	.user_data{
		float:left;
		margin: 0 20/50rem;
		line-height: 22/50rem;
		p:nth-child(2){
			color: #989898;
		}
	}
	.hotTopic_data{
		margin-top: 30/50rem;
		margin-left: 30px;
		.data_title{
			font-size: 16/50rem;
		}
		.data_num{
			margin-top: 10px;
			color: #818181;
		}
	}
	.return{
		position: absolute;
		top:50%;
		right: 10/50rem;
		transform:rotate(180deg);
	}
}
.go_img{
	height: 160/50rem;
	padding:15/50rem;
	background-color: #fff;
	.go_url{
		display: block;
		width:30%;
		float: left;
		img{
			width: 100%;
		}
	}
	.go_url:nth-child(2){
		margin-left: 15/50rem;
		margin-right: 15/50rem;
	}
}
</style>
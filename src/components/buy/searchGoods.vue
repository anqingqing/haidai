<template>
	<div>
		 <div class="nav">
      <span onclick="window.history.go(-1)">
        <i class="iconfont icon-fanhui"></i>
      </span> 
    	<input type="text" placeholder="搜索笔记.商品和代购" class="input" v-model="keyword" @keyup="getInfo" >
      <!-- <i class="iconfont icon-sousuo" @click="getInfo"></i> -->
      <i class="iconfont icon-quxiao" @click="disQualify"></i>
    </div>
		<div class="searchctent" v-if="flag">
			<h2>热门搜索</h2>
			<ul>
				<li v-for="(hotWords,index) in hotWord">
					<a href="javascript:;">{{hotWords.frontword}}</a>
				</li>
			</ul>
		</div>
		<div class="searchGoods" v-else>
			<ul v-for="(word,index) in searchData">
				<li v-for="(words,index) in word">
					<a href="javascript:;">{{words[0]}}</a>
					<i class="iconfont icon-biaoqing"></i>
				</li>
			</ul>
			
		</div>

	</div>
</template>
<script>
import Navshop from "./components/Navshop";
export default {
	name:'searchGoods',
	components:{
		Navshop
	},
	data(){
		return{
			hotWord:[],
			keyword:'',
			searchData:[],
			flag:true

		}
	},

	// 获取热词搜索
    created(){
    var currentURL=this.HOST+'/data/message.json';
    this.$http.get(currentURL)
    .then(res => {
      // console.log(res.data.hotWord)
      this.hotWord=res.data.hotWord;
    })
    .catch(error => {
      console.log(error);
    })

    
  },
  methods:{
  	disQualify(){
  		// 返回原页面
  		this.flag=true;
  		this.keyword="";

  	},
  	getInfo(){
  		// 键盘抬起获取数据
  		this.flag=false
  		 var currentApi=this.URL+'https://suggest.taobao.com/sug?code=utf-8&q='+this.keyword;
			    this.$http.get(currentApi)
			    .then(res => {    
			        this.searchData=JSON.parse(res.data)
			         // console.log(this.searchData)
			    })
			    .catch(error => {
			      console.log(error);
			    })
  	}
  }
  


}
</script>
<style  lang="less" scoped>
.nav{
	    width: 100%;
	    height: 60/50rem;
	    background: #FF6B9F;
	    position: relative;
	    top:0;
	    overflow: hidden;
  	}

  	.input{
		float: left;
		width:290/50rem;
		height: 25/50rem;
		background: #fff;
		border-radius: 2/25rem;
		border: none;
		margin-top:25/50rem;
		margin-left: 50/50rem;
		padding-left: 30/50rem;
  	}
    .icon-fanhui{
      position: absolute;
      left:14/50rem;
      top:29/50rem;
      color: #fff;
      font-size: 20/50rem;

    }
    .icon-quxiao{
       position: absolute;
      right:38/50rem;
      top:28/50rem;
      color: #828282;
      font-size: 20/50rem;
    }
  	.photo{
  		float: right;
  		margin-top:20/50rem;
      height:30/50rem; 
      width:30/50rem;
		margin-right: 10/50rem;
  	}
.searchctent{
	width: 100%;
	padding:20/50rem;
	box-sizing: border-box;
	color: #999;
	h2{
	color:#999;
	padding-bottom: 20/50rem;
	}
	ul{
		overflow: hidden;
		padding-right: 10/50rem;
	}
	ul>li{
	 padding: .2rem .3rem;
    margin: 0 .2rem .2rem 0;
    line-height: .3rem;
    background: #FFF0F5;
    border-radius: 4px;

	}

}
	.searchGoods{
		width: 100%;
		ul{
			width: 80%;
			margin: 0 auto;

			li{
				width: 100%;
				line-height:30/50rem;
				border-bottom:1px solid #ddd;
				.icon-biaoqing{
					float: right;
					color:#FF6B9F;
					margin-right: 30/50rem;
				}
			}
		}
		
	}

	

</style>
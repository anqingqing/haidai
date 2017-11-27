<template>
  <div class="container">
  	<!-- 头部标题 -->
  	<div class="asktobuyNav">
		<i class="iconfont icon-fanhui" onclick="window.history.go(-1)"></i>
		<span>话题</span>
		<!-- 关注 -->
		<span class="attention">
		 <span v-if="val"  @click="open('top')">+ 关注</span> 
      <span v-else="val" @click="close('top')">已关注</span>
  </span>
	</div>
	<!-- 关注弹出框 -->
	 <div class="gz">
   	  	<mu-popup position="top" v-if="val1"  :overlay="false" popupClass="demo-popup-top" :open="topPopup">关注成功</mu-popup>
     	<mu-popup position="top" v-else="val1" :overlay="false" popupClass="demo-popup-top" :open="topPopup">取消关注</mu-popup>
    </div>
    <!-- 求购信息左,左右浮动形成瀑布流效果 -->
	<div class="container_data">
	    <div class="contentTemplate" v-for="(item, index) in data">
	    	<img :src="item.original" alt="" class="big_img">
	    	<div class="contentTemplate_text">
	    		<p class="title">{{item.title}}</p>
				<p class="content">{{item.desc}}</p>
	    	</div>
	    	<div class="user">
	    		<div class="contentTemplate_user">
	    			<img :src="item.image" alt="" class="icon_header">
					<span class="author_name">{{item.nickname}}</span>
	    		</div>
				<div class="love">
					<i class="iconfont icon-xin xin"></i>
					<span class="number">{{item.likes}}</span>
				</div>
	    	</div>
	    </div>
	</div>
	<!-- 求购信息右 -->
    <div class="container_data">
	    <div class="contentTemplate" v-for="(item, index) in data2">
	    	<img :src="item.original" alt="" class="big_img">
	    	<div class="contentTemplate_text">
	    		<p class="title">{{item.title}}</p>
				<p class="content">{{item.desc}}</p>
	    	</div>
	    	<div class="user">
	    		<div class="contentTemplate_user">
	    			<img :src="item.image" alt="" class="icon_header">
					<span class="author_name">{{item.nickname}}</span>
	    		</div>
				<div class="love">
					<i class="iconfont icon-xin xin"></i>
					<span class="number">{{item.likes}}</span>
				</div>
	    	</div>
	    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'moreTopics',
  components:{
  },
  data () {
    return {
    	id:0,
        data:[],
        data2:[],
        val:true,
        val1:true,
        bottomPopup: false,
        topPopup: false,
        leftPopup: false,
        rightPopup: false
    }
  },
  created(){
  	// 从服务器拉取json文件
    var currentURL=this.HOST+'/data/moretopics.json';
    this.$http.get(currentURL)
    .then(res => {
    	this.data = res.body.data;
    	this.data2 = res.body.data2;
    	console.log(this.data2)
    })
    .catch(error => { 
    })
  },
    methods:{
     open (position) {
      this.val = false 
      this.val1 = true
      this[position + 'Popup'] = true
    },
    close (position) {
      this.val = true
      this.val1 = false 
      this[position + 'Popup'] = true
    }
},
 watch: {
    topPopup (val) {
      if (val) {
        setTimeout(() => {
          this.topPopup = false,
          this.topPopup2 = false
        },1000)
      }
    },
  	computed:{
		idx(){
			var Id=this.$route.path.split('/').splice(3,1)+'';
			this.$store.state.idx=Id;
			return this.$store.state.idx;
		}
		
	}
}
}
</script>

<style scoped lang="less">
.container{
		width: 100%;
		background: #F6EAEE;
		overflow: hidden;
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
		.attention{
			position: absolute;
			right: 0.4rem;
			font-size: 18/50rem;
		}

	}
	.user{
		overflow: hidden;
		background-color: #fff;
		padding: 5/50rem 10/50rem;
		box-sizing: border-box;
		position: relative;
	.hotTopic{
		float: left;
		width:70/50rem;
		height:70/50rem;
		img{
			width: 100%;
		}
	}
	.hotTopic_data{
		float: left;
		margin-top: 15/50rem;
		margin-left: 30px;
		.data_title{
			font-size: 16/50rem;
		}
		.data_num{
			font-size: 14/50rem;
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

	.container_data{
		padding: 10/50rem 0 10/50rem 10/50rem;
		float: left;
		width: 49%;
		.contentTemplate{
			background-color: white;
			box-sizing: border-box;
			margin-bottom: 10/50rem;
		.user{
			overflow: hidden;
			margin-left: 5/50rem;
			.love{
				float: right;
				}
			}
		.big_img{
			width: 100%;
			}
		.contentTemplate_text{
			padding: 0 10/50rem;
			.title{
				margin:10/50rem 0;
				display: inline-block;
				width:170/50rem;
				text-overflow: ellipsis;
   				white-space: nowrap;
   	 			vertical-align: top;
   	 			overflow:hidden;
	}
			.content{
				text-indent: 30/50rem;
				color: #CFCFCF;
				margin: 10/50rem 0;
				line-height: 20/50rem;
				margin-top: -5/50rem;
				overflow : hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
	}
	}
	.user{
		.contentTemplate_user{
			float: left;
			.icon_header{
				width: 25/50rem;
				height: 25/50rem;
				border-radius: 50%;
					}
			.author_name{
				display: inline-block;
				font-size: 12px;
				color: #A5A5A5;
				text-align:center;
				line-height: 25/50rem;
				width:50/50rem;
				text-overflow: ellipsis;
   				white-space: nowrap;
   	 			vertical-align: top;
   	 			overflow:hidden;
				}
	}
		.love{
			padding-right: 10/50rem;
			padding-bottom: 10/50rem;
			.xin{
				color: #FF6B9F;
			}
			.number{
				color: #A5A5A5;
				line-height: 25/50rem;
				}
		}
	}
}
	}
}

.demo-popup-top {
  position: absolute;
  top: 50rem;
  width: 100%;
  opacity: .8;
  height:50rem;
  line-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 375px;
}
</style>
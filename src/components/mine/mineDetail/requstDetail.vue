<template>
	<div class="requstDetail">
		<div class="detailnav">
		    <span onclick="window.history.go(-1)">
		        <i class="iconfont icon-fanhui"></i>
		    </span> 
       	    <span class="toptitle">我的购买</span>
    	</div>
	    <div class="detail_content">
	    	<img :src="MRequst.mpicUrl" alt="">
	    	<p>
	    		<span class="attetion" v-if="val"  @click="open('top')">
        <i >+</i>关注</span>
      <span v-else="val" @click="close('top')" class="attetion changeattetion">已关注</span>
    	</p>

      <div class="gz">
      <mu-popup position="top" v-if="val1"  :overlay="false" popupClass="demo-popup-top" :open="topPopup">关注成功</mu-popup>
      <mu-popup position="top" v-else="val1" :overlay="false" popupClass="demo-popup-top" :open="topPopup">取消关注</mu-popup>
	  </div>  



	    	<p class="conTitle">{{MRequst.title}}</p>
	    	<div class="conText">{{MRequst.detail}}</div>
	    	
	    </div>
	    <div class="footer">
	    	<p class="zhan"> 
	    		<i class="iconfont icon-xin"></i>
	    	   <span>赞 88</span>
	    	</p>
	    	<p class="argument">
		    	<i class="iconfont icon-weibiaoti11"></i>
		    	<span>评论 66</span>
	    	</p>
	    	<p class="cllect">
		    	<i class="iconfont icon-shoucang"></i>
		    	<span>收藏 1120</span>	
	    	</p>
{{getId}}
		</div>
	</div>
</template>
<script>
	export default{
		name:'requstDetail',
		data(){
			return{
				requstDetails:[],
				MRequst:[],
			   topPopup: false,
	          val:true,
	          val1:true

			}
		},
		created(){
		    var currentURL=this.HOST+'/data/mjson.json';
		    this.$axios.get(currentURL)
		    .then(res => {
		    	// console.log(res);
		    	this.shareDetails=res.data.MRequst[this.$store.state.mineId];
		    	this.MRequst =res.data.MRequst[this.$store.state.mineId];
		    	// console.log(this.MRequst)
		    })
		    .catch(error => {
		      console.log(error);
		    })
		},
		computed:{
			getId(){
				var Id=this.$route.path.split('/').splice(-1)[0];
				this.$store.state.mineId=Id

				// console.log(Id);
			}
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
		  }
		  ,
		 watch: {
		    topPopup (val) {
		      if (val) {
		        setTimeout(() => {
		          this.topPopup = false,
		          this.topPopup2 = false
		        },1000)
		      }
		    }
  }
	}
</script>
<style scoped lang="less">
.requstDetail{
width: 100%;	
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
	
	.detail_content{
		padding-bottom: 56/50rem;
		&>img{
			width: 100%;
			display: block;
		}
		.attetion{
  				float: right;
  				margin-right: 10/50rem;
  				margin-top: 5/50rem;
  				border: 1px solid #FF6B9D;
  				padding:5/50rem;
  				color: #FF6B9D;
  				border-radius: 5/50rem;
  			}
		.conTitle{
			text-align: center;
			display: block;
		    font-size: 20/50rem;
		    color: #666;
		    font-weight: bold;
		    line-height: 200%;
		    letter-spacing:10/50rem;
		}
		.conText{
			font-size: 14/50rem;
			color: #999;
			text-indent:36/50rem;
			line-height: 200%;
			padding: 0 15/50rem;
			letter-spacing:5/50rem;
		}

	}
	.footer{
		width: 100%;
		position:fixed;
		background: #fff;
		bottom:0px;
		left:0px;
		// overflow: hidden;
		p{
			width: 33.3%;
			float: left;
			padding:20/50rem;
			box-sizing: border-box;
			color:#404040;
			.icon-xin{
				color:#FF6A9D;
			}
			.icon-shoucang{
				color:#FF6A9D;
			}
		}

	}
}
</style>
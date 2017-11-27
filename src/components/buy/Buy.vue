<template>
  <div class="buy">
  	  <Navs />
    <Footers />

  <swiper :options="swiperOption">
  
    <swiper-slide>
      <img  src="http://data.allenamy.com/overseashopping/banner6.jpg" alt="">
    </swiper-slide>
    <swiper-slide><img src="http://data.allenamy.com/overseashopping/banner7.jpg" alt="" ></swiper-slide>
    <swiper-slide><img src="http://data.allenamy.com/overseashopping/banner8.jpg" alt="">
    </swiper-slide>
       <swiper-slide><img src="http://data.allenamy.com/overseashopping/banner9.jpg" alt="">
    </swiper-slide>
       <swiper-slide><img src="http://data.allenamy.com/overseashopping/banner10.jpg" alt="">
    </swiper-slide>
   <div class="swiper-pagination"  slot="pagination">
   </div>
  </swiper>
  <div class="navbtn">
  	<ul>
  		<li >
  			<router-link :to="{path:'/buycontent/goods'}">
	  			<span class="caizhuang">
	  				<i class="iconfont icon-caizhuang"></i>
	  			</span>
		  			彩妆
	  		</router-link>
	  	</li>

  		<li  v-for="(item,index) in items"  @click="getData">
  			<router-link :to="{name:'Personcare',params:{id:index}}">
		  		<span :class="item.spanClass">
		  			<i :class="item.iconClass"></i>
		  		</span>
				  {{item.title}}
			  </router-link>
		</li>
  		<li>
  			<router-link :to="{path:'/buycontent/more'}">
		  		<span class="more">
		  			<i class="iconfont icon-ZHicon-"></i>
		  		</span>
				  	更多
		  </router-link>
		</li>
  	</ul>
  	</div>
  	<div class="buy-goods">
  		<div class="goods-left" v-for="(goods,index) in goodslist" :key='index'>
  			<img :src="goods.img" alt="">
  			<p>	{{goods.title}}</p>
  			<span>{{goods.money}}</span>
  		</div>
  	</div>

  </div>
</template>

<script>
import Navs from '../Nav';
import Footers from '../Footers';

export default {
  name: 'Buy',
  components:{
		Navs,
		Footers
  },
  data () {
    return {
    	goodslist:[],
    	items:[],
    	idx1:0,
    	id:0,
      swiperOption: {
          autoplay: 3000,
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          mousewheelControl: true,
          observeParents: true,
          loop:true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          onTransitionStart (swiper) {
            // console.log(swiper.activeIndex)
          }
          // more Swiper configs and callbacks...
          // ...
    }
  }
},
created(){
    // console.log("组件创建后")
    var currentURL=this.HOST+'/data/buynav.json';
    this.$http.get(currentURL)
    .then(res => {
    	// console.log(res.data)
    	this.goodslist=res.data.goodslist;
    	this.items=res.data.items;
	  
    })
    .catch(error => {
      console.log(error);
    })
  },
computed:{
	idx(){
		var Id=this.$route.path.split('/').splice(3,1)+'';
			this.$store.state.idx=Id;
			// console.log(this.$store.state.idx,Id)
	}
},
methods:{
	getData(event){
		var Id=this.$route.path.split('/').splice(3,1)+'';
			this.$store.state.idx=Id;


	}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.buy{
	background: #F5F5F5;

	width: 100%;
	height: 100%;
	.swiper-wrapper{
		width: 100%;
		height:100%;
			img{
				width: 100%;
				height: 175/50rem;
			}
	}
	.navbtn{
		width: 100%;
		margin: 10/50rem 0;

		&>ul{
			width: 100%;
			overflow: hidden;
			background: #fff;
			li{
				width: 25%;
				text-align: center;
				a{
					width: 100%;
					display: block;
					padding:10/50rem;
					font-size: 18/50rem;
					color: #9D9D9D;

					&>span{
						width: 50/50rem;
						height:50/50rem;
						display: block;
						border-radius: 50%;
						background: #ff918d;
						position: relative;
						margin: 10/50rem 0px;
						margin-left:25%;
						.iconfont{
							position: absolute;
							left:10/50rem;
							top:10/50rem;
							color: #fff;
							font-size: 30/50rem;
						}
					}
					.personcare{
						background: #a9ecbe;
					}

						span:nth-of-type(3){
						background: #FEA676;
					}
						.baojian{
						background: #FFDD79;
					}
						.clother{
						background: #ACADFF;
					}
						.peishi{
						background: #FD91AB;
					}
						.jiaju{
						background: #99CDFF;
					}
						.more{
						background: #DEA5F2;
					}
				}
			}

		}

	}
	.buy-goods{
		width: 100%;
		overflow: hidden;
		margin-bottom: 20/50rem;
		&>div{
			width: 46%;
			height: 280/50rem;
			background: #fff;
			float: left;
			margin-left:10/50rem;
			color: #383838;
			font-size: 15/50rem;
			line-height: 18/50rem;
			margin-bottom: 15/50rem;
			&>img{
				width: 100%;
			}
			p{
				margin:10/50rem;
			}

		}


	}
}

</style>
<!-- 国家的页面布局 -->
<template>
  <div class="hello">
    <!-- <p>Nation国家</p> -->
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="http://data.allenamy.com/overseashopping/country1.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="http://data.allenamy.com/overseashopping/country7.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="http://data.allenamy.com/overseashopping/country3.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="http://data.allenamy.com/overseashopping/country4.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="http://data.allenamy.com/overseashopping/country5.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="http://data.allenamy.com/overseashopping/country6.jpg" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
	<Country />
  </div>
</template>

<script>
import Country from "./common/Country"
export default {
  name: 'Nation',
  data () {
    return {
      swiperOption: {
          // swiper options 所有的配置同swiper官方api配置
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
          onTransitionStart (swiper) {
           
          }
        }
    }
  },
  components:{
  	Country
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello{
	width: 100%;
	height: 100%;
	.swiper-wrapper{
		width: 100%;
		height: 200/50rem;
		img{
			width: 100%;
			height: 200/50rem;
		}
	}
}

img{
	width: 100%;
}
.swiper-button-prev,.swiper-button-next{
	display: none;
}


</style>
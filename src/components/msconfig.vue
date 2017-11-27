<template>
  <div id="msconfig">

    <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide>
      <img class="bannerimg" src="http://data.allenamy.com/overseashopping/guidepage1.jpg" alt="">
    </swiper-slide>
    <swiper-slide><img  class="bannerimg" src="http://data.allenamy.com/overseashopping/guidepage2.jpg" alt="" ></swiper-slide>
    <swiper-slide><img class="bannerimg-active" src="http://data.allenamy.com/overseashopping/guidepage3.jpg" alt="">
 <div class="enter-button"><router-link to="/homepage">点击进入</router-link></div>
    </swiper-slide>

  </swiper>
    <router-view/>
  </div>
</template>
<script>
import Homepage from "./Homepage"

export default {
  name: 'msconfig',
  components:{
    Homepage
  },
  data () {
    return {
        swiperOption: {
          // swiper options 所有的配置同swiper官方api配置
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          observeParents: true
        }
    
    }
  }
}
</script>

<style scoped lang="less" >
#msconfig{
  width: 100%;
  height: 100%;
}

.swiper-container{
   width: 100%;
   height: 100%;

      .swiper-wrapper{
         width: 100%;
        height: 100%;
          .bannerimg{
            width: 100%;
            height: 100%;
            }
      }
  
}
.bannerimg-active {
   position: relative;
  width: 100%;
  height: 100%;
}
.enter-button{
  position: absolute;
  left:50%;
  transform:translate(-50%);
  bottom:100/50rem;
  z-index:99;
  border:1px solid orange;
  padding:15/50rem;
}

</style>

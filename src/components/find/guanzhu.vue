<template>
<div>
  <span v-if="val"  @click="open('top')">+ 关注</span> 
  <span v-else="val" @click="close('top')">已关注</span>

 <div class="gz">
    <mu-popup position="top" v-if="val1"  :overlay="false" popupClass="demo-popup-top" :open="topPopup">关注成功</mu-popup>
    <mu-popup position="top" v-else="val1" :overlay="false" popupClass="demo-popup-top" :open="topPopup">取消关注</mu-popup>
  </div>  

</div>
</template>

<script>
export default {
  data () {
    return {
      bottomPopup: false,
      topPopup: false,
      leftPopup: false,
      rightPopup: false,
      val:true,
      val1:true
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
},
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

<style lang="css">
.demo-popup-top {
  width: 100%;
  opacity: .8;
  height: 48px;
  line-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 375px;
}
</style>
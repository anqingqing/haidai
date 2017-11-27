<!-- 护肤的详情 -->

<template>
  <div class="container">

      <div class="detailnav">
        <span onclick="window.history.go(-1)">
          <i class="iconfont icon-fanhui"></i>
        </span> 
          <span class="toptitle">{{cosmetics.title}}</span>
      </div>

       <div class="box2">
        <div class="img_box"><img :src="cosmetics.img2" alt="" class="img1"></div>
        <div class="content_box">
            <p class="content_title">{{cosmetics.p2}}</p>
            <p class="content_text">{{cosmetics.p2}}</p>
        </div>
      </div>

      <div class="box1">
        <div class="img_box"><img :src="cosmetics.img1" alt="" class="img1"></div>
        <div class="content_box">
            <p class="content_title">{{cosmetics.p1}}</p>
            <p class="content_text">{{cosmetics.p2}}</p>
        </div>
      </div>

      <div class="box2">
        <div class="img_box"><img :src="cosmetics.img2" alt="" class="img1"></div>
        <div class="content_box">
            <p class="content_title">{{cosmetics.p2}}</p>
            <p class="content_text">{{cosmetics.p2}}</p>
        </div>
      </div>

    <router-view></router-view>
  </div>
</template>

<script>

import Data from "../../../data/detail.json"

export default {
  name: 'cosmeticsDetail',
  data () {
    return {
      cosmetics : ''
    }
  },

  created:function(){
    
    var idArr = this.$route.path.split('/');
    var id = idArr[idArr.length-1]
    // console.log(id);
    // console.log(Data);
    this.cosmetics = Data.cosmetics[id];
    console.log(this.cosmetics);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  
  .container{
    background-color:#F6EAEE;
    padding-bottom: 10/50rem;
  }

	 .detailnav{
    width: 100%;
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

  .div_back,.div_title{
    float: left;
  }

  .div_back{
    width: 10%;
  }

  .div_title{
    width: 80%;
    text-align: center;
  }

  .btn_back{
    color: white;
    margin-left: 20/50rem;
    font-size: 25/50rem;
  }

  .title{
    font-size: 25/50rem;
    color: white;
    margin: 0 auto;
  }

  .box1,.box2{
      margin: 20/50rem 10/50rem;
      background-color: white;
      overflow: hidden;
  }

  .img_box,.content_box{
    float: left;
  }
  
  .img1{
    display: block;
    width: 190/50rem;
    height: 200/50rem;
    box-sizing: border-box;
  }

  .content_title{
    font-size: 20/50rem;
    font-weight: bold;
    color: #404040;
  }
  
  .content_box{
    width: 160/50rem;
    padding:20/50rem;
    box-sizing: border-box; 
  }

  .content_text{
    margin-top: 15/50rem;
    line-height: 20/50rem;
    font-size: 15/50rem;
    color: #404040;
  }

</style>
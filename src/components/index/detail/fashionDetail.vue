<!-- fashion的详情 -->

<template>
  <div class="container">

       <div class="detailnav">
          <span onclick="window.history.go(-1)">
            <i class="iconfont icon-fanhui"></i>
          </span> 
          <span class="toptitle">{{fashion.name}}</span>
      </div>

      <p class="content_title">{{fashion.title}}</p>

      <div class="content_detail">
        <div class="bianji">编辑 : {{fashion.bianji}}</div>
        <div class="date"> {{fashion.date}}</div>
        <div class="guanzhu"><i class="iconfont icon-biaoqing"></i> {{fashion.number}}</div>
      </div>

      <div class="content">
        <p>{{fashion.content}}</p>
      </div>

      <div class="img">
        <img :src="fashion.img_top" alt="">
      </div>

      <div class="footer_content">
        <p>{{fashion.content1}}</p>
      </div>

    <router-view></router-view>
  </div>
</template>

<script>

import Data from "../../../data/detail.json"

export default {
  name: 'fashionDetail',
  data () {
    return {
      fashion : ''
    }
  },

  created:function(){
    
    var idArr = this.$route.path.split('/');
    var id = idArr[idArr.length-1]
    // console.log(id);
    // console.log(Data);
    this.fashion = Data.fashion[id];
    console.log(this.fashion);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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

  .content_title{
    font-size: 20/50rem;
    font-weight: bold;
    margin:10/50rem auto 10/50rem;
    color: #404040;
    line-height: 26/50rem;
    text-indent: 40/50rem;
  }
  
  .content_detail{
    overflow: hidden;
    width: 100%;
    height: 30/50rem;
    font-size: 16/50rem;
    position: relative;
    line-height: 30/50rem;
    margin:15/50rem 0;
  }

  .bianji,.date,.guanzhu{
    float: left;
  }

  .guanzhu{
    position: absolute;
    right: 10/50rem;
    top:0;
  }

  .bianji{
    margin-left: 10/50rem;
  }

  .date{
    margin-left: 25/50rem;
  }

  .content,.footer_content{
    margin : 10/50rem;
    background-color: #F8F8F8;
    padding:10/50rem;
  }

  .content p,.footer_content p{
    line-height: 36/50rem;
    font-size: 18/50rem;
    color: #666666;
  }  

  .img{
    padding:10/50rem;
  }

  .img img{
    width: 100%;

  }
 
  

</style>
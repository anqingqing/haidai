<template>
  <div class="container">
      <ul>
        <li class="index"><router-link  exact to="/recommend"> 
          <i class="iconfont icon-icon index1"></i>
        首页</router-link></li>

        <li class="find"><router-link to="find">
          <i class="iconfont icon-sousuo find1"></i>
        发现</router-link></li>

        <li class="buy"><router-link to="buy">
          <i class="iconfont icon-gouwudai buy1"></i>
        购买</router-link></li>

        <li class="message"><router-link to="message">
          <i class="iconfont icon-xiaoxi message1"></i>
        消息</router-link></li>

        <li class="mine"><router-link to="mine">
          <i class="iconfont icon-2 mine1"></i>
        我</router-link></li>
      </ul>
  </div>
</template>

<script>

import "../assets/css/font/iconfont.css"

export default {
  name: 'Footers',
  data () {
    return {
     
    }
  }
}
</script>

<style scoped lang="less">
	.container{
    position:fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 80/50rem;
    background: #fff;
      ul{
      margin:0 10/50rem;
      li{
        width: 20%;
        height: 100%;
        font-size: 18/50rem;
        margin-top: 50/50rem;
        text-align: center;
        margin-left: 0px;
        position: relative;
        color: #9D9D9D;
      }
    }
  }

  .iconfont{
      position: absolute;
      top:-38/50rem;
      left:14/50rem;
      width:40/50rem;
      height: 40/50rem;
      font-size:30/50rem;
  }

  
.router-link-active{
  color: #fe6a9c;
}
  
</style>
<!-- 推荐页面布局从仓库中获取数据 -->
<template>
  <div class="container">
      <div class="box" @click="getId">
        <router-link :to ='{name:"detail",params:{id:index}}' class="content_template" v-for="(item,index) in items" tag="div" :key="index">
          <img :src="item.img" alt="" class="img">
          <p class="title">{{item.title}}</p>
          <p class="content">{{item.content}}</p>

          <div class="footer_box">
            <div class="icon_img">
                <img :src="item.icon_header" alt="" class="icon_header">
                <span class="name">{{item.name}}</span>
            </div>

            <div class="dianzan_img">
                <i class="iconfont icon-xin xin"></i>
                <span class="number">{{item.number}}</span>
            </div>
          </div>

       </router-link>
    </div>
    <div class="clear"></div>
  </div>
</template>
<script>

import Data from '../../../data/detail.json'

export default {
  name: 'DataTemplate',
  data () {
    return {
      id:0,
      items:[]
    }
  },
    created(){
    // 获取后台数据并解析
    var currentURL=this.HOST+'/data/detail.json';
    this.$http.get(currentURL)
    .then(res => {
      // 赋值给初始默认值
      this.items = res.data.items;
      // console.log(res.data.items)
    })
    .catch(error => {
    })
  },
  computed:{
  },
  methods:{
    // 根据id获取数据
     getId(){
      var Id=this.$route.path.split('/').splice(2,1)+'';
      this.$store.state.id=Id;
      // console.log(this.$store.state.id)
      return this.$store.state.id;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  .box{
    width: 100%;   
    overflow: hidden;
    
  }
  .content_template{
    width: 46%;
    float: left;
    box-sizing: border-box;
    background: white;
    margin:2%;
  }

  .img{
    width: 100%;
    text-align: center;
    height: 150/50rem;
  }

  .title{
    color: black;
    font-size: 16/50rem;
    margin: 10/50rem ;
    margin-right: 0;
  }

  .content{
    color: #959595;
    font-size: 15/50rem;
    padding-left: 5/50rem;
    padding-top: 4/50rem;
    box-sizing: border-box;
    text-align: left;
    text-indent: 20/50rem;
    line-height: 20/50rem;
  }

  .footer_box{
    overflow: hidden;
    width: 100%;
    height: 50/50rem;
    line-height: 50/50rem;
    text-align: center;
    vertical-align: middle;
  }

  .icon_img{
      float: left;
      text-align: center;
      margin-left: 10/50rem;
  }
  .dianzan_img{
      float: right;
      text-align: center;
  }

  .icon_header{
    width: 30/50rem;
    height: 30/50rem;
    border-radius: 50%;
    margin-top: 8/50rem;
  }

  .name{
    display: inline-block;
    color: #959595;
    top: -10/50rem;
    position: relative;
  }

  .xin{
    color: #FF6B9F;
    // font-size: 2/50rem;
    // margin-right: 2/50rem;
    // margin-top: 10/50rem;
  }
  
  .number{
    color: #959595;
    margin-top: -5/50rem;
    margin-right: 20/50rem;
  }
  
  .clear{
    margin-bottom: 70/50rem;
  }
</style>
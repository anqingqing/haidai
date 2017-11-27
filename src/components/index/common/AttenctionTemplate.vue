<!-- 关注的页面 -->
<template>
  <div class="container">
      <div class="box">
        <router-link :to='{name:"attentionDetail",params:{id:index}}' class="content_template" v-for="(item,index) in items" tag="div" :key="index">
          <img :src="item.img" alt="" class="img">
          <p class="title">{{item.title}}</p>
          <p class="content">&nbsp;&nbsp;&nbsp;{{item.content}}</p>

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

export default {
  name: 'AttentionTemplate',
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
      this.items = res.data.guanzhu;
      // console.log(res.data.guanzhu)
    })
    .catch(error => {
    })
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
    padding-top: 4/50rem;
    box-sizing: border-box;
    text-align: left;
    line-height: 25/50rem;
    padding-left: 5/50rem;
  }

  .icon_img{
      float: left;
      text-align: center;
      padding-left: 5/50rem;
  }
  .dianzan_img{
      float: right;
      text-align: center;
      margin-top: 18/50rem;
      margin-bottom: 5/50rem;
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
    top: -6/50rem;
    position: relative;
  }

  .xin{
    color: #FF6B9F;
    font-size: 20/50rem;
    margin-right: 2/50rem;
    margin-top: 30/50rem;
  }
  
  .number{
    color: #959595;
    margin-right: 20/50rem;
  }
  
  .clear{
    margin-bottom: 70/50rem;
  }
</style>
<!-- 国家旅游的详情 -->

<template>
  <div class="container">
        <div class="navs">
            <div class="div_back" onclick="window.history.go(-1)">
              <span  >
                <i  class="iconfont icon-fanhui btn_back"></i>
              </span>
            </div>
            <div class="div_title" v-if="nations.length"><span class="title">{{country["nationArea"]}}</span></div>
        </div>

        <div class="big_img">
          <img :src="country['imgUrl']" alt="">
        </div>

        <div class="content">
          <p>{{country['content']}}</p>
        </div>
    <router-view></router-view>
  </div>
</template>

<script>

// import Data from "../../../data/detail.json"
// console.log(Data.nations[0].lists);

export default {
  name: 'countryDetail',
  data () {
    return {
      nations : {},
      country:{},
      Data:[]
    }
  },

  created(){
        // 获取后台数据并解析
    var currentURL=this.HOST+'/data/detail.json';
    this.$http.get(currentURL)
    .then(res => {
      // 赋值给初始默认值
      this.Data = res.data;
      
    var idArr = this.$route.path.split('/');
    var id = parseInt(idArr[idArr.length-1]) ;
    // console.log(id)
    this.nations = this.Data.nations[id]["lists"];
    let str= window.location.href;
    str=str.substr(str.length-1,1);
    let num =parseInt(str);
    this.country=this.nations[num];
    // console.log(this.country);
    // console.log(this.Data)
    })
    .catch(error => {
    })


  },
   methods:{
    // 根据id获取数据
    //  getId(){
    //   var Id=this.$route.path.split('/').splice(2,1)+'';
    //       this.$store.state.id=Id;
    //   // console.log(this.$store.state.id)
    //   return this.$store.state.id;
    // }
  },
  computed:{
  
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

	.navs{
    width: 100%;
    height: 50/50rem;
    line-height: 50/50rem;
    background-color: #FF6B9D;
    overflow: hidden;
    font-size: 18/50rem;
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
    font-size: 18/50rem;
  }

  .title{
    font-size: 18/50rem;
    color: white;
    margin: 0 auto;
  }

  .big_img{
    width: 100%;
    height: 250/50rem;
    margin:30/50rem 0;
    text-align: center;
    overflow: hidden;
  }
 
  .big_img img{
      width: 300/50rem;
  }

  .content{
    width: 100%;
    background-color: #F3F3F3;
    box-sizing: border-box;
  }

  .content p{
    line-height: 32/50rem;
    font-size: 18/50rem;
    text-indent: 50/50rem;
  }

</style>
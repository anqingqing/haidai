
<!-- 推荐的详情 -->
<template>
  <div class="container" >

    <div class="detailnav">
        <span onclick="window.history.go(-1)">
          <i class="iconfont icon-fanhui"></i>
        </span> 
          <span class="toptitle">{{tuijian.title}}</span>
      </div>
    
    <img class="big_img" :src="tuijian.img" alt="">
    <div class="footer_box">
        <div class="box1">
          <div class="people">
              <div class="icon_img">
                <img :src="tuijian.icon_header" alt="" class="head_icon">
              </div>
              <div class="icon_name">
                <span class="name">{{tuijian.name}}</span>
              </div>
          </div>
          
          <div>
                <!-- <div class="btn_guanzu">+关注</div> -->
                <span v-if="val"  @click="open('top')" class="btn_guanzu">+ 关注</span> 
                <span v-else="val" @click="close('top')" class="btn_guanzu">已关注</span>
                
                <div class="gz">
                  <mu-popup position="top" v-if="val1"  :overlay="false" popupClass="demo-popup-top" :open="topPopup">关注成功</mu-popup>
                  <mu-popup position="top" v-else="val1" :overlay="false" popupClass="demo-popup-top" :open="topPopup">取消关注</mu-popup>
                </div>  
            </div>

        </div>
    </div>
    <p class="content">{{tuijian.content}}</p>
    <div class="footer_nav">
        <div class="zan" @click="attetion">
          <i class="iconfont icon-xin" :class="flag?'active':''"></i>
          <span class="zan_text">赞·{{zanNum}}</span>
        </div>
        <div class="pinglun">
          <i class="iconfont icon-weibiaoti11"></i>
          <span class="zan_text">评论·66</span>
        </div>
        <div class="shoucang" @click="collect">
          <i class="iconfont icon-shoucang" :class="cllect?'collectActive':''"></i>
          <span class="zan_text">收藏·{{collectNum}}</span>
        </div>
    </div>
	  <router-view></router-view>
	</div>
  </div>
  
</template>

<script>

import Data from '../../../data/detail.json'

export default {
  name: 'detail',
  data () {
    return {
       tuijian:'',
       bottomPopup: false,
       topPopup: false,
       leftPopup: false,
       rightPopup: false,
       val:true,
       val1:true,
       //点赞
       zanNum:54,
       cllect:false,
       collectNum:1510,
       flag:false
    }
  },
  methods:{
       getId(){
        var Id=this.$route.path.split('/').splice(3,1)+'';
        this.$store.state.id=Id;
    },

      open (position) {
        this.val = false 
        this.val1 = true
        this[position + 'Popup'] = true
      },
      close (position) {
        this.val = true
        this.val1 = false 
        this[position + 'Popup'] = true
      },

      //点赞
       attetion(){
       this.flag=!this.flag
          this.zanNum=parseInt(this.zanNum);
          if(this.flag){
            this.zanNum+=1
          }else{
            this.zanNum-=1
          }
      },
      //收藏
       collect(){
             this.cllect=!this.cllect
            this.collectNum=parseInt(this.collectNum);
            if(this.cllect){
              this.collectNum+=1
            }else{
              this.collectNum-=1
            } 
    }
  },
  computed:{
    getData(){
      return this.$store.state.items;
    }
  },
  created:function(){
    
    var idArr = this.$route.path.split('/');
    var id = idArr[idArr.length-1]
    // console.log(id);
    // console.log(Data);
    this.tuijian = Data.tuijian[id];
    console.log( this.tuijian);
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

  .big_img{
    width: 100%;
    height: 390/50rem;
    padding:15/50rem;
    box-sizing: border-box;
    border-radius: 5/50rem;
    background-color: #F6EAEE;
    padding-bottom: 0;
  }

  .box1{
    overflow: hidden;
    width: 100%;
    height: 60/50rem;
  }
	
  .people{
    float: left;
    overflow: hidden;
  }

  .icon_img,.icon_name{
    float: left;
  }

  .head_icon{
    margin: 5/50rem;
  }

  .name{
    display: block;
    margin:20/50rem 10/50rem;
    font-size: 16/50rem;
    color: #C1C1C1;
  }

  .btn_guanzu{
    float: right;
    border: 1px solid #FF9DBD;
    padding: 8/50rem 16/50rem;
    border-radius: 5/50rem;
    color: #FF9DBD;
    margin:14/50rem 20/50rem;
  }

  .content{
    text-indent: 40/50rem;
    line-height: 25/50rem;
    font-size: 16/50rem;
    color: #333333;
    font-family: "Microsoft Yahei";
    padding : 5/50rem 15/50rem;
  }

  .footer_nav{
    width: 100%;
    height: 50/50rem;
    overflow: hidden;
    text-align: center;
    line-height:50/50rem;
  }

  .icon-xin,.icon-shoucang{
    color: #FF6A9D;
  }

  .icon-xin,.icon-weibiaoti11,.icon-shoucang{
    font-size: 20/50rem;
  }

  .zan,.pinglun,.shoucang{
    float: left;
    width: 33%;
  }

  .zan_text{
    color: #333333;
    font-size: 16/50rem;
    text-align: center;
    margin-left: 5/50rem;
  }

  // 初始颜色
 .icon-xin,.icon-shoucang{
    color: #404040;
  }

 .active{
      color:#FF6A9D;
  }
  .collectActive{
    color:#FF6A9D
  }

</style>
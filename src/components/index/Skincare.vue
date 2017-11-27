<!-- 护肤的页面布局 -->
<template>
  <div class="container">
    <router-link :to='{name:"skincareDetail",params:{id:index}}' class="contentTemplate" v-for="(item , index) in items" :class="index % 2 == 1 ? 'active' : ''" tag="div" :key="index">
    	<img :src="item.big_img" alt="" class="big_img">
    	<p class="title">{{item.title}}</p>
		<p class="content">{{item.content}}</p>

		<div class="footer_box">
            <div class="icon_img">
                <img :src="item.icon_header" alt="" class="icon_header">
                <span class="name">{{item.author_name}}</span>
            </div>

            <div class="dianzan_img">
                <i class="iconfont icon-xin xin"></i>
                <span class="number">{{item.number}}</span>
            </div>
        </div>

    </router-link>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  name: 'Skincare',
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
      this.items = res.data.skincare;
      // console.log(res.data)
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
	.container{
		width: 100%;
		background: #F6EAEE;
		overflow: hidden;
	}
	.contentTemplate{
		width: 46%;
		background-color: white;
		padding:2%;
		box-sizing: border-box;
		float: left;
		margin:2.5%;
		margin-bottom: 0;
	}
	.contentTemplate .big_img{
		width: 100%;
		height: 150/50rem;
	}

	.title{
		margin:5/50rem;
	}
	.content{
		text-indent: 20/50rem;
		color: #CFCFCF;
		margin: 10/50rem 0;
		line-height: 20/50rem;
	}
	
	.icon_img{
      float: left;
      text-align: center;
  }
  .dianzan_img{
      float: right;
      text-align: center;
      margin-top: 16/50rem;
      margin-right: -10/50rem;
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
    margin-top: 10/50rem;
  }
  
  .number{
    color: #959595;
    margin-right: 20/50rem;
  }

	.active{
		margin-left:0;
	}

	.clear{
		margin-bottom: 705/50rem;
	}

</style>
<!-- 时尚页面布局 -->
<template>
  <div class="container">
  	<router-link class="box"  :to='{name:"fashionDetail",params:{id:index}}'  v-for="(item,index) in  items" :key="index" tag="div" >
	    <img :src="item.img_top" alt="" class="img_top">
	    <div class="btn"><p>{{item.btn}}</p></div>
	    <h2 class="title">{{item.title}}</h2>
	  	<p class="content">{{item.content}}</p>
	  	<p class="date">{{item.date}}</p>
  	</router-link>
  	<div class="clear"></div>
  </div>
</template>

<script>
export default {
  name: 'Fashion',
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
      this.items = res.data.fashion;
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


<style scoped lang="less">
	.container{
		width: 100%;
		height: 100%;
		
	}

	.img_top{
		width: 100%;
		height: 320/50rem;
	}

	.btn{
		width: 250/50rem;
		height: 50/50rem;
		background-color: #F4F4F4;
		text-align: center;
		line-height:50/50rem; 
		font-size: 18/50rem;
		position: relative;
		top:-10/50rem;
		left:60/50rem;
		color: #FF71A3;
	}

	.title{
		font-size: 18/50rem;
		font-weight: bold;
		line-height: 20/50rem;
		padding:10/50rem;
		box-sizing: border-box;
		padding-top: 0;
	}

	.content{
		font-size: 15/50rem;
		padding:10/50rem;
		color: #A2A2A2;
		padding-top: 0;
		line-height: 20/50rem;
	}
	
	.date{
		padding:10/50rem;
		padding-top: 0;
		font-size: 18/50rem;
		color:#FF71A3;
		margin-bottom: 40/50rem;
	}
	
	.clear{
		margin-top: 100/50rem;
	}

</style>
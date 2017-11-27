<!-- 彩妆页面布局 -->
<template>
  <div class="container">
  		<div class="content" v-for="(item,index) in items" :key="index">
  			<p class="title">{{item.title}}</p>
  			<ul class="img_box">
  				<li><router-link tag="a" :to='{name:"cosmeticsDetail",params:{id:index}}' :key="index">
  						<img :src="item.img1" alt=""> 
  						<p>{{item.p1}}</p>
  				</router-link></li>
  				<li><router-link tag="a" :to='{name:"cosmeticsDetail",params:{id:index}}' :key="index">
  					<img :src="item.img2" alt="">
  					<p>{{item.p2}}</p>
  				</router-link></li>
  			</ul>
  		</div>
  		<div class="clear"></div>
  </div>
</template>

<script>
export default {
  name: 'Cosmetics',
  data () {
    return {
      	items:[]
    }
  },
   created(){
    // 获取后台数据并解析
    var currentURL=this.HOST+'/data/detail.json';
    this.$http.get(currentURL)
    .then(res => {
      // 赋值给初始默认值
      this.items = res.data.cosmetics;
      console.log(res.data)
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
		background-color: white;
	}

	.content{
		width: 100%;
	}

	.title{
		text-indent: 20/50rem;
		font-size: 20/50rem;
		font-weight: bold;
		padding:5/50rem;
	}

	.img_box{
		width: 100%;
		overflow: hidden;
		margin-bottom: 30/50rem;

		li{
			float: left;
			width: 50%;
			background-color: white;
			text-align: center;
			font-size: 14/50rem;
			img{
				width: 100%;
				padding:5/50rem;
				box-sizing: border-box;
				height: 150/50rem;

			}
		}
	}

	.clear{
		margin-top: 100/50rem;
	}

</style>
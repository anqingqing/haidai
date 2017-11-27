<!-- 国家的页面布局 -->
<template>
  <div class="container">
		<div class="box"  v-for="(item,index) in items" tag="div" :key="index">

		<p class="name">{{item.nation}}</p>
		<ul class="ul_img">
			<li class="first" v-for="(list,index) in item.lists">
				<router-link :to='{name:"countryDetail",params:{id:list["routeid"]+"_"+list["id"]}}' tag="a" :key="index"><img :src="list.imgUrl" alt="">{{list.nationArea}}</router-link>
			</li>
		</ul>
	</div>

    <div class="cl"></div>
  </div>
  
</template>

<script>
export default {
  name: 'Country',
  data () {
    return {
        id:0,
        items:[],
        lists:[]
      
    }
  },
  created(){
    // 获取后台数据并解析
    var currentURL=this.HOST+'/data/detail.json';
    this.$http.get(currentURL)
    .then(res => {
      // 赋值给初始默认值
      this.items = res.data.nations;
      this.lists = this.items[0].lists
      // console.log(this.items)
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
		height: 500/50rem;
		background: #F6EAEE;
		margin-top: 10/50rem;
	}
	.box{
		width: 100%;
		height: 170/50rem;
		background-color: white;
		margin-top: 20/50rem;
	}
	.name{
		font-size: 18/50rem;
		padding:12/50rem;
		box-sizing: border-box;
	}
	.ul_img {
		width: 100%;
		height: 120/50rem;
		overflow: hidden;
	}
	.ul_img li{
		float: left;
		width: 28%;
		height: 90/50rem;
		margin-right: 2.5%;
	}
	.first{
		margin-left: 2.5%;
	}
	.ul_img li img{
		width: 100%;
		margin-bottom: 10/50rem;
	}
	.ul_img li a{
		text-align: center;
		display: block;
	}
	.cl{
		padding-bottom: 70/50rem;
	}
</style>
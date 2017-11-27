<template>
  <div class="container">
    <div class="nav">
      <router-link to="/searchGoods">
    	<input type="text" placeholder="搜索笔记.商品和代购" class="input">


      </router-link> 
    	<img src="http://data.allenamy.com/overseashopping/photo.png"  alt="" class="photo">
    </div>
       <!-- https://list.mogujie.com/search?cKey=h5-shopping&fcid=&pid=9750&searchTag=%E5%95%86%E5%93%81&sort=pop&page=1&_version=61&_=1511400508572&callback=jsonp1 -->



      <!--搜索热词 https://list.mogujie.com/module/mget?code=sketch%2ChotWord&platform=H5&token=vlXKwcSppWk%2FJAprk28j3nUWpKibOENT1ZcK1Buak4dBT%2FdKAlw6PMpQrlil2M1W&callback=httpCb151140162370973&_=1511401623709 -->
  </div>
</template>
<script>
export default {
  name: 'Mine',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.nav{
	    width: 100%;
	    height: 60/50rem;
	    background: #FF6B9F;
	    position: relative;
	    top:0;
	    overflow: hidden;
  	}

  	.input{
		float: left;
		width: 285/50rem;
		height: 25/50rem;
		background: #fff;
		border-radius: 2/25rem;
		border: none;
		margin-top:25/50rem;
		margin-left: 15/50rem;
		padding-left: 30/50rem;
  	}
	&:before{
  		content: "";
  		display: block;
  		position: absolute;
  		top:26/50rem;
  		left: 20/50rem;
  		background-image: url(http://data.allenamy.com/overseashopping/serch.png);
  		background-size: 25/50rem 25/50rem;
  		width:25/50rem;
  		height: 25/50rem;
	}
  	
  	.photo{
  		float: right;
  		margin-top:20/50rem;
      height:30/50rem; 
      width:30/50rem;
		margin-right: 10/50rem;
  	}
</style>
<template>
  <div class="container">
    <div class="nav">
      <span onclick="window.history.go(-1)">
        <i class="iconfont icon-fanhui"></i>
      </span> 
    	<input type="text" placeholder="搜索笔记.商品和代购" class="input" >
      <i class="iconfont icon-quxiao"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navshop',
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
		width: 260/50rem;
		height: 25/50rem;
		background: #fff;
		border-radius: 2/25rem;
		border: none;
		margin-top:25/50rem;
		margin-left: 50/50rem;
		padding-left: 30/50rem;
  	}
    .icon-fanhui{
      position: absolute;
      left:14/50rem;
      top:29/50rem;
      color: #fff;
      font-size: 20/50rem;

    }
    .icon-quxiao{
       position: absolute;
      right:38/50rem;
      top:28/50rem;
      color: #828282;
      font-size: 20/50rem;
    }
  	.photo{
  		float: right;
  		margin-top:20/50rem;
      height:30/50rem; 
      width:30/50rem;
		margin-right: 10/50rem;
  	}
</style>
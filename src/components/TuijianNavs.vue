<template>
  <div class="container">
    <ul>
      <li><router-link to="recommend" active-class="active">推荐</router-link></li>
      <li><router-link to="attention" active-class="active">关注</router-link></li>
      <li><router-link to="nation" active-class="active">国家</router-link></li>
      <li><router-link to="skincare" active-class="active">护肤</router-link></li>
      <li><router-link to="fashion" active-class="active">时尚</router-link></li>
      <li><router-link to="cosmetics" active-class="active">彩妆</router-link></li>
    </ul>
  </div>
</template>
<script>

export default {
  name: 'TuijianNavs',
  data () {
    return {
      
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  ul{
    overflow: hidden;
    height: 1rem;
    background: white;
    text-align: center;
    line-height: 1rem;
    font-size: 18/50rem;
  }

  ul li{
    margin-left :23/50rem;
    overflow: hidden;
  }

  .active{
    color: #ff6b9f;
  }

</style>
<!-- 推荐的页面布局为首页 -->
<template>
  <div class="container">
    <Navs />
    <TuijianNavs />
    
    <router-view></router-view>
    <Footers />
  </div>
</template>
<script>
import Navs from '../Nav';
import Footers from '../Footers';
import TuijianNavs from '../TuijianNavs';
export default {
  name: 'Index',
  components:{
    Navs,
    TuijianNavs,
    Footers
  },
  data () {
    return {
      
    }
  },
  methods:{
    
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

  .container{
    background: #F5F5F5;
    width: 100%;
  }

  .router-link-active{
    color: #FE75A3;
  }

</style>

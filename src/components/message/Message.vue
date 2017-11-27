<template>
  <div class="hello">
 <div class="mesNav">
 	<h3>消息</h3>
 	<span>客服中心</span>
 </div>
 <div class="tabs">
   <el-tabs v-model="activeName" @tab-click="handleClick">
      		    <el-tab-pane label="动态" name="first"><Dynamic/></el-tab-pane>
      		    <el-tab-pane label="互动" name="second"><Interact/></el-tab-pane>
      		    <el-tab-pane label="通知" name="third"><Inform/></el-tab-pane>
      		  </el-tabs>
        </div>
  <Footers/>
  </div>
</template>

<script>
import Footers from '../Footers'
import Interact from './mesPages/interact'
import Dynamic from './mesPages/mesDetail/dynamic'
import Inform from './mesPages/mesDetail/inform'
export default {
  name: 'Message',
  components:{
  	Footers,
    Interact,
    Dynamic,
    Inform
  },
  data () {
    return {

    	  activeName: "second"
    }
  },
    methods:{
      handleClick(tab, event) {
       
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang='less'>
.mesNav{
	width: 100%;
    background: #FF6B9F;
    position: relative;
    h3{
    	color: #fff;
    	text-align: center;
    	padding:15/50rem;
    	font-size: 20/50rem;
    	
    }
    span{
    	position: absolute;
    	right:20/50rem;
    	top:20/50rem;
    	color: #fff;
    }
}

</style>
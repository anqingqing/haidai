<template>
	<div class="buygoods">

			<div class="goodnav">
		 
              <el-tabs v-model="activeName" @tab-click="handleClick">
      		    <el-tab-pane label="日志" name="first"><Log :log="log"/></el-tab-pane>
      		    <el-tab-pane label="商品" name="second"><Commondity :commondity="commondity"/></el-tab-pane>
      		    <el-tab-pane label="代购" name="third"><Hotboom :hotboom="hotboom" /></el-tab-pane>
      		  </el-tabs>
				  <router-view></router-view>
          {{idx}}
			</div>
	</div>
</template>
 <script>
import Log from "./pageslist/log";
import Commondity from "./pageslist/commondity";
import Hotboom from "./pageslist/hotboom";

export default{
	name:"Goods",
	 data() {
      return {
        activeName: "first",
        log:{},
        commondity:{},
        hotboom:{},
        navId:0
      }
   },
  components:{
       Log,
       Commondity,
       Hotboom
       },
   methods:{
      handleClick(tab, event) {
        // console.log(tab.index);
        this.navId=tab.index;
      }
    },
    created(){

    var currentURL=this.HOST+'/data/goods.json';
    this.$http.get(currentURL)
    .then(res => {
      // console.log(res.data.items[0])
      this.log=res.data.items[0];
      this.hotboom=res.data.items[2];
      this.commondity=res.data.items[1];
    
    })
    .catch(error => {
      console.log(error);
    })
  },
    computed:{
      idx(){
        this.$store.state.detailThree=this.navId;
        // return this.$store.state.detailThree; 
      }
    
  }


}


	
</script>
<style scoped lang="less">

	
</style>
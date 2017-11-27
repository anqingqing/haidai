<template>
  <div class="container">

    <DataTemplate />

    
  	 

    <router-view></router-view>
  </div>
</template>

<script>
import Index from "../Index"
import DataTemplate from "../common/DataTemplate"
export default {
  name: 'Recommend',
  components:{
  	Index,
    DataTemplate
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  

</style>
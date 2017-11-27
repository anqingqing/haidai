<template>
  <div class="hello">
 <List/>
<Enter/>

  </div>

</template>

<script>


import List from './compontens/list';
import Enter from './compontens/text';


export default {
  name: 'interactDetail',
  components:{

    List,
    Enter
  },
  data () {
    return { 
      inteDataDetail:[]
  
    }
  
    },
     created(){

    var currentURL=this.HOST+'/data/message.json';
    this.$http.get(currentURL)
    .then(res => {
      // console.log(res.data.message)
      this.inteDataDetail=res.data.message[this.$store.state.detailId];
     
    
    })
    .catch(error => {
      console.log(error);
    })
  },
  computed:{
      idx(){
        var Id=this.$route.path.split('/').splice(2,1)+'';
        this.$store.state.detailId=Id;

        // console.log(this.$route.path)
        // return this.$store.state.detailId;
        
      }
    
  }
}
</script>


<style scoped  lang='less'>



</style>
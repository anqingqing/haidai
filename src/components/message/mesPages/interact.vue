<template>
  <div class="hello">

    <ul class="interact_content" >
     
      <li  v-for="(item,index) in inteData" >
         <router-link :to="{name:'interactDetail',params:{id:index}}">
        <a href="javascript:;">
       <div class="author_icon">
        <img :src="item.avatar" alt="">
       </div>
        <p>
          <span class="name_shop">{{item.name}}</span>
          <span class="argument">{{item.argument}}</span>
       </p>
       <p class="time">{{item.time}}</p>
       </a>
        </router-link>
    </li>
   
     
    </ul>

  </div>
</template>

<script>

export default {
  name: 'interact',
  components:{

  },
  data () {
    return { 
    inteData:[]	
    }
  
    },
 
    created(){

    var currentURL=this.HOST+'/data/message.json';
    this.$http.get(currentURL)
    .then(res => {
      // console.log(res.data.message)
      this.inteData=res.data.message;
     
    
    })
    .catch(error => {
      console.log(error);
    })
  },

}
</script>


<style scoped  lang='less'>
.interact_content{
  width: 100%;
  li{
    width: 100%;
    padding:10/50rem 0;
    border:1px solid #EFE7EA;

    .author_icon{
      width: 50/50rem;
      height: 50/50rem;
      border-radius: 50%;
      overflow: hidden;
      float: left;
      margin-left: 10/50rem;
      img{
        width: 50/50rem;
      }
    }
    p{
      float: left;
       color:#A7A7A7;
       margin-left: 10/50rem;
      span{
        display: block;
        color:#A7A7A7;
        padding:5/50rem;
        letter-spacing:2/50rem;
      }
      .argument{
          width:120/50rem;
        text-overflow: ellipsis;
          white-space: nowrap;
          vertical-align: top;
          overflow:hidden;
      }
      .name_shop{
        font-size: 18/50rem;
        color: #444242;
      }
    }
    .time{
      float: right;
      margin-right: 10/50rem;
    }
  }

}


</style>
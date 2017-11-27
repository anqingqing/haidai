<template>
  <div class="hello">
       <ul> 
          <li class="dynamic" v-for="(dyname,index) in dynamic">
           <div class="dynamic_left">
              <p class="title">{{dyname.extMap.explanation}}</p>
            <p class="article">{{dyname.itemName}}</p>
            <span>来自爱淘宝</span>
           </div>
           <div class="dynamic_right">
             <span class="time">17/11/11</span>
             <p><img :src="dyname.pic" alt=""></p>
           </div>
          </li>
      </ul>
  </div>

</template>

<script>

export default {
  name: 'dynamic',
  data () {
    return { 
      dynamic:[]
     
    }
  
    },
    
     created(){
    var currentURL=this.HOST+'/data/message.json';
    this.$http.get(currentURL)
    .then(res => {
      // console.log(res.data)
      this.dynamic=res.data.collect
    })
    .catch(error => {
      console.log(error);
    })
  },
  methods:{
 

  }
}
</script>


<style scoped  lang='less'>
.hello{
  width: 100%;
  ul{
    width: 100%;
    .dynamic{
      padding:10/50rem;
      overflow: hidden;
      box-sizing: border-box;
      border-bottom: 1px solid #EFE7EA;
      .dynamic_left{
        float: left;
        width: 80%;
        padding-right:10/50rem;
        box-sizing: border-box;
        .title{
          line-height:30/50rem;
          font-size: 20/50rem;
        }
        .article{
          font-size: 15/50rem;
          line-height: 25/50rem;

        }
         span{
            color: #A6A5A5;
            letter-spacing: 3/50rem;
            line-height: 15/50rem;
          }
      }
      .dynamic_right{
        float: right;
        width: 20%;
        .time{
          display: block;
          padding-bottom: 20/50rem;
          color: #A6A5A5;
          margin-left: 20/50rem;
        }
        p{
          width: 100%;
          img{
            width: 100%;
          }
        }
      }
    }
  }
}


</style>
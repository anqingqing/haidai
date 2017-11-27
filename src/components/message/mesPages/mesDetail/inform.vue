
<template>
  <div class="hello">
    <ul> 
          <li class="dynamic" v-for="(inform,index) in informs">
           <div class="dynamic_left">
              <p class="title">{{inform.explanation}}</p>
            <p class="article">{{inform.itemName}}</p>
            <span>by {{inform.from}}</span>
           </div>
           <div class="dynamic_right">
             <span class="time">17/11/11</span>
             <p><img :src="inform.pic" alt=""></p>
           </div>
          </li>
      </ul>
  </div>
</template>

<script>

export default {
  name: 'inform',
  components:{
  

  },
  data () {
    return {
    	informs:[] 
    }
  
    },
 
    created(){
    var currentURL=this.HOST+'/data/message.json';
    this.$http.get(currentURL)
    .then(res => {
      // console.log(res.data.inform)
      this.informs=res.data.inform;
    
    
    })
    .catch(error => {
      console.log(error);
    })
  },

}
</script>


<style scoped  lang='less'>
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
          padding:5/50rem;

        }
         span{
            color: #A6A5A5;
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

</style>
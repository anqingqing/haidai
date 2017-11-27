<template>
<div class="list">
    <div class="detailnav">
       <span onclick="window.history.go(-1)">
            <i class="iconfont icon-fanhui"></i>
          </span> 
          <p>{{idx}}</p>
       <span class="toptitle">{{sessionName}}</span>
    </div>
    <div class="topic">
      <div class="mef">
      <p class="user_icon"><img :src="sessionAvatar" alt=""></p>
      
      <p class="argument">{{sessionArgument}}</p>
    </div>
     </div>
</div>
</template>
<script>


export default {
    name:"list",
    data(){
        return {
            sessions:{},
            sessionName:'',
            sessionAvatar:'',
            sessionArgument:''
        }
    },
    created(){
    var currentURL=this.HOST+'/data/message.json';
    this.$http.get(currentURL)
    .then(res => {
        this.sessions=res.data.message[this.$store.state.detailId];
        this.sessionName=this.sessions.name;
        this.sessionAvatar=this.sessions.avatar;
        this.sessionArgument=this.sessions.argument;
      

      // console.log(this.sessionName)
     
    
    })
    .catch(error => {
      console.log(error);
    })
  },
   computed:{
      idx(){
        var Id=this.$route.path.split('/').splice(2,1)+'';
        this.$store.state.detailId=Id;
        this.sessions=this.$store.state.mes

        // return this.$store.state.detailId;
        
      }
  }
};
</script>



<style scoped lang="less">
.list {
    li {
        padding: 12px 15px;
        border-bottom: 1px solid #292C33;
        cursor: pointer;
        transition: background-color .1s;

        &:hover {
            background-color: rgba(255, 255, 255, 0.03);
        }
        &.active {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
    .avatar, .name {
        vertical-align: middle;
    }
    .avatar {
        border-radius: 2px;
    }
    .name {
        display: inline-block;
        margin: 0 0 0 15px;
    }
}
.detailnav{
      width: 100%;
      // height: 60/50rem;
      background: #FF6B9F;
      position: relative;
      overflow: hidden;
      text-align: center;
      padding:20/50rem 0px;
      color: #fff;
      font-size: 18/50rem;
      p{
        display: none;
      }
    }
     .toptitle{
      display: inline-block;
        width:120/50rem;
        text-overflow: ellipsis;
          white-space: nowrap;
          vertical-align: top;
          overflow:hidden;
    }
    .icon-fanhui{
      position: absolute;
        left:14/50rem;
        top:20px;
        color: #fff;
        font-size: 20/50rem;
    }
    .topic{
      width: 100%;
      min-height: 667/50rem;
      background: #F5F5F5;
      .mef{
      
            overflow: hidden;
    position: relative;
    padding: 5/50rem;
        .user_icon{
        width:40/50rem;
        height: 40/50rem;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
          top: 5/50rem;
          left: 14/50rem;
        img{
          width: 100%;
        }
       
      }

       .argument{
              user-select: text;
              margin: 0 10/50rem 5/50rem 52/50rem;
              background: #fff2f6;
              border: 1px solid #ffe5ee;
              position: relative;
              display: inline-block;
              overflow: visible;
              -moz-box-sizing: border-box;
              box-sizing: border-box;
              padding: 10/50rem 10/50rem;
              border-radius: 8/50rem;
              max-width: 78%;
              word-wrap: break-word;
              min-height: 32/50rem;
              min-height: 16/50rem; 
              line-height: 20/50rem;
        }
       
          
       
      }

      
    }
     .argument>:before{
                content: "";
                background: #fff2f6;
                display: inline-block;
                -webkit-transform: rotate(-135deg);
                transform: rotate(-135deg);
                height: 8/50rem;
                width: 8/50rem;
                border-width: 1px 1px 0 0;
                border-color: #ffe5ee;
                border-style: solid;
                display: none\9;
                position: absolute;
                left: -6/50rem;
                top: 12/50rem;

        }
</style>
<template>
	<div class="container" >
    <template>
    	<div class="log" v-for="(list,index) in hotboom.list">
    		
	         <div class="log-content">
	         	<router-link :to="{name:'detailshop',params:{id:index}}" tag="a">
	          <img :src="list.img" alt="" class="img">
	          <p class="title">{{list.title}}</p>
	          <p class="content">{{list.content}}</p>
	          <div class="log_detail">
	          <img :src="list.icon_header" alt="" class="author_icon">
              <span class="author"> {{ list.author}}</span>
              <i class="icon-xin iconfont"></i>
              <span class="number"> {{ list.number}}</span>
	          </div>
	           </router-link>
	          </div>
	     
	     </div>
    </template>
  </div>
</template>
<script>
export	default {
	name:"Hotboom",
	data(){
		return{
			
		}
	},
	props:{
				hotboom:{
					type:Object,
					default:function(){
						return[{
							// title:'log',
							// default:'commondity'
							}]
				}
			}
		}
}
</script>
<style lang='less'>
.container{
	width: 100%;
	background: #F5F5F5;
	overflow: hidden;
	.log{
		width: 44%;
		float: left;
		margin-left:15/50rem;
		.log-content{
			margin-top:15/50rem;
			background: #fff;
			padding-bottom:10/50rem; 
			.img{
			width: 100%;
			height:174/50rem;
			}
			.title{
				padding:5/50rem;
				line-height: 22/50rem;
			}


			.content{
				color:#666666;
				font-size: 12/50rem;
				line-height: 18/50rem;
				margin: 5/50rem;
			}
			.log_detail{
				overflow: hidden;
				.author_icon{
				width: 15/50rem;
				float: left;
				margin-right: 5/50rem;
			}
			span{
				font-size: 10/50rem;
				float: left;
			}
			.icon-xin{
				float: right;
				color: #B8B8B8;

			}
			.number{
				margin-right: 10/50rem;
				float: right;
			}

			}
			
		}
	}

}
	
</style>
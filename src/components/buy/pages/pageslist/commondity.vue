<template>
	<div class="container">
    <template>
    	<div class="commondity" v-for="(list,index) in commondity.list">
	         <div class="commonditylist">
	         	<router-link :to="{name:'detailshop',params:{id:index}}" tag="a">
	          <img :src="list.img" alt="" class="img">
	          <p class="content">{{list.content}}</p>
	          <p class="money">{{list.money}}</p>
	          <div class="commondity_detail">
	          	<img :src="list.country_icon" alt="" class="country_icon">
              <span class="country">{{list.country}}</span>
              <span class="author"> {{ list.author}}</span>
	          </div>
          </router-link>
	          </div>
    
    	</div>
    </template>
        
 
  </div>
</template>
<script>
export	default {
	name:"Commondity",
	data(){
		return{
			 
      
    }

		},
		props:{
				commondity:{
					type:Object,
					default:function(){
						return[{
					
							}]
				}
			}
		}
	}

</script>
<style scoped lang='less'>
.container{
	width: 100%;
	background: #F5F5F5;
	overflow: hidden;
	.commondity{
		width: 44%;
		float: left;
		margin-left:15/50rem;
		.commonditylist{
			margin-top:15/50rem;
			background: #fff;
			padding:10/50rem 0px; 
			.img{
			width: 100%;
			
			}
			.title{
				padding:5/50rem;
				line-height: 22/50rem;
			}
			.content{
				color:#4C4C4C;
				font-size: 12/50rem;
				line-height: 15/50rem;
				margin-bottom: 5/50rem;
			}
			.commondity_detail{
				overflow: hidden;
				.country_icon{
				width: 15/50rem;
				float: left;
				margin-right: 5/50rem;
			}

			span{
				font-size: 10/50rem;
				float: left;
			}
			.country{
					  width:60/50rem;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				    vertical-align: top;
				    overflow: hidden;
					
			}
			.author{
				  margin-right: 10/50rem;
					float: right;
			}

			}
			
		}

		


	}

}

</style>
<template>
	<div class="myrequst">
		<ul>
			<router-link :to="{name:'requstDetail',params:{id:index}}" tag="li" v-for="(project,index) in MRequst" :key="index">
				<img :src="project.mpicUrl" alt="">
				<h2 class="shareTitle">{{project.title}}</h2>
				<p class="shareJianjie">{{project.jianjie}}</p>
			</router-link>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'myrequst',
		data(){
			return{
				MRequst:[]

			}
		},
		created(){
		    var currentURL=this.HOST+'/data/mjson.json';
		    this.$axios.get(currentURL)
		    .then(res => {
		    	this.MRequst = res.data.MRequst;

		    })
		    .catch(error => {
		      console.log(error);
		    })
		}
		 
}
</script>
<style scoped lang="less">
.myrequst{
	padding-bottom: 70/50rem;
	ul{
		width: 100%;
		background-color: #f6eaee;
		overflow: hidden;
		li{ 	
			background-color: #fff;
			width:46%;
			margin:2%;
			overflow: hidden;
			img{
				width: 100%;
				height: 150/50rem;			}
			.shareTitle{
				padding: 10/50rem 10/50rem;
				width: 60%;
				font-size: 14/50rem;
				font-weight: bold;
				white-space:nowrap;
				text-overflow: ellipsis;
				color: #666;
			}
			.shareJianjie{
				font-size: 12/50rem;
				line-height: 140%;
				padding:0 10/50rem 10/50rem;
				box-sizing: border-box;
				color: #999;
			}

		}
	}

}

	
</style>
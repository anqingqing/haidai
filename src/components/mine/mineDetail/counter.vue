<template>
	<div class="counter-component">
		<div class="counter-btn" @click="minus"> - </div>		
		<div class="counter-show">
			<input type="text" v-model="num" @keyup="getNumber">
		</div>
		<div class="counter-btn" @click="adds"> + </div>
	</div>
</template>
<script>

export default {
	name:"counter",
	data(){
		return{
			num:1
		}
	},
	props:{
		max:{
			type:Number,
			default:10
		},
		min:{
			type: Number,
			default:1
		}
	},
	methods:{
		minus(event){
			if(this.num <= this.min){
				return;
			}
			this.num--
		},
		adds(event){
			if(this.num >= this.max){
				return;
			}
			this.num++	
		},
		getNumber(event){
			// 快速输入
			let finalNum;
			if(typeof this.num === "string"){
				finalNum = Number(this.num.replace(/\D/g,""));
			}else{
				finalNum = this.num;
			}
			if(finalNum > this.max || finalNum<this.min){
				finalNum = this.min;
			}
			this.num = finalNum;
		}
	}
}
	
</script>
<style scoped lang="less">
.counter-component {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.counter-show {
  float: left;
}
.counter-show input {
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 23/50rem;
  line-height: 23/50rem;
  width: 30/50rem;
  outline: none;
  text-indent: 4/50rem;
  text-align: center;
}
.counter-btn {
  border: 1px solid #ddd;
  float: left;
  height: 25/50rem;
  line-height: 25/50rem;
  width: 25/50rem;
  text-align: center;
  cursor: pointer;
}
.counter-btn:hover {
  border-color: #FF6B9F;
  background: #FF6B9F;
  color: #fff;
}		
</style>
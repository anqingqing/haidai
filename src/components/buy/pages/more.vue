<template>
	<div class="buygoods">
		<div class='xiangbao'>
			<template v-for="(list,index) in datalist">
				<h3 class="title">{{list.icon}}</h3>
			<ul class="goodslist">
				<li v-for="(listdetail, index) in list.bag" class="more_bag">
					<a href="javascript:;">
					<img :src="listdetail.img" alt="">
					<p>{{listdetail.title}}</p>
					</a>
				</li>
				
			</ul>
			</template>
		</div>
	</div>
</template>
 <script>
export default{
	name:"More",
	data(){	
		return{
			datalist:[{
				icon:'箱包',
				bag:[{
				title:'双肩包',
				img:'http://data.allenamy.com/overseashopping/handbag01.png'
				  },
				  {
					title:'钱包',
					img:'http://data.allenamy.com/overseashopping/handbag02.png'
				  },{
					title:'单肩包',
					img:'http://data.allenamy.com/overseashopping/handbag03.png'
				  },{
					title:'手提包',
					img:'http://data.allenamy.com/overseashopping/handbag04.png'
				  },{
					title:'斜挎包',
					img:'http://data.allenamy.com/overseashopping/handbag05.png'
				  },{
					title:'晚宴包',
					img:'http://data.allenamy.com/overseashopping/handbag06.png'
				  },{
					title:'公文包',
					img:'http://data.allenamy.com/overseashopping/handbag07.png'
				  },{
					title:'行李包',
					img:'http://data.allenamy.com/overseashopping/handbag08.png'
				  }]
				},
					{
					icon:'鞋靴',
					bag:[{
					title:'凉鞋',
					img:'http://data.allenamy.com/overseashopping/shoes01.png'
				  },
				  {
					title:'帆布鞋',
					img:'http://data.allenamy.com/overseashopping/shoes02.png'
				  },{
					title:'运动风',
					img:'http://data.allenamy.com/overseashopping/shoes03.png'
				  },{
					title:'芭蕾舞鞋',
					img:'http://data.allenamy.com/overseashopping/shoes04.png'
				  },{
					title:'猫跟鞋',
					img:'http://data.allenamy.com/overseashopping/shoes05.png'
				  },{
					title:'系带鞋',
					img:'http://data.allenamy.com/overseashopping/shoes06.png'
				  },{
					title:'小白鞋',
					img:'http://data.allenamy.com/overseashopping/shoes07.png'
				  },{
					title:'穆勒鞋',
					img:'http://data.allenamy.com/overseashopping/shoes08.png'
				  }]
				}]
			

		}
	}
}
	
</script>
<style lang="less">
.xiangbao{
	width: 100%;
	.title{
		text-align: center;
		font-size: 18/50rem;
		padding:20/50rem;
		color: #3C3C3C;
	}
	.goodslist{
		width: 100%;
		overflow: hidden;
		li{
			width: 22.5%;
			background: #F5F5F5;
			margin-left: 8/50rem;
			padding:5/50rem;
			box-sizing: border-box;
			margin-bottom: 10/50rem;
			img{
				width: 98%;
				height: 72.38/50rem;
			}
			p{
				text-align: center;
				margin-top: 10/50rem;
			}
		}
	}

}

	
</style>
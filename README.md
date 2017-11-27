Muse-Ul
1.安装:npm install --save muse-ui

2.加载:
	import Vue from 'vue'
	import MuseUI from 'muse-ui'
	import 'muse-ui/dist/muse-ui.css'
	Vue.use(MuseUI)
3.组件加载:
	{
        test: /muse-ui.src.*?js$/,
        loader: 'babel'
      }
 4.main.js引入:
 	import 'muse-components/styles/base.less' // 加载基础的样式
	import appBar from 'muse-components/appBar'
	import avatar from 'muse-components/avatar'
	Vue.component(appBar.name, appBar)
	Vue.component(avatar.name, avatar)

总文件夹名称：overseashopping

进入app:一个启动页面（start.vue），3个轮播页面(slideshow.vue)（最后一张轮播点击进入登录页面）
登录界面（login.vue(1.jpg)）:登录功能，新人注册（reg）功能，忘记密码
（qq登录，微信登录，微博登录），登录完成进入homepage页面（默认index中（推荐（recommend.vue）））

页面主页（homepage.vue）:{
固定导航条（搜索框）搜索（功能：获取焦点：热门搜索与历史(8.jpg)）
首页（index.vue）,
发现（find.vue），
购买（buy.vue）,
消息（message.vue）,
我（mine.vue）
}

公共的样式:components文件夹
		  -> Nav.vue 公共的导航条样式
		  -> Footers.vue 公共的页脚样式
		  -> TuijianNavs.vue 为首页的推荐,关注,国家,美妆...的导航条样式
		  -> msconfig.vue 为进入首页前的轮播图,点击进入首页


首页（index）:{
推荐（recommend.vue） -> 加载common文件夹里面的DataTemplate.vue组件显示,点击进入详情
					  -> detail文件夹里面的detail.vue组件显示详情,通过拼接id来获取数据

关注（attention.vue） -> 加载common文件夹里面的AttenctionTemplate.vue组件显示,点击进入详情
					  -> detail文件夹里面的attentionDetail.vue组件显示

国家（nation.vue)     -> 加载common文件夹里面的Country.vue组件显示,引入轮播图
						 通过id的动态绑定和字符串的拼接获得跳转路由的id,点击进入详情
					  -> detail文件夹里面的countryDetail.vue组件

护肤（skincare.vue）  -> 加载Skincare.vue组件显示,点击进入详情
					  -> detail文件夹里面的SkincareDetail.vue组件显示详情

时尚（fashion.vue)    -> 加载Fashion.vue组件显示,点击进入详情,
					  -> detail文件夹里面的fashionDetail.vue组件显示详情

彩妆（cosmetics.vue） -> 加载Cosmetics.vue组件显示,点击进入详情
					  -> detail文件夹里面的cosmeticsDetail.vue组件显示详情
}

发现（find.vue）:{
求购信息(asktobuy.vue)->（图片来源，文件名称扁平中14.jpg）;
热门话题（hottopic.vue）->(图片来源，扁平中13.jpg);
走到哪购到哪（gowhere.vue）(11.jpg)->点击进入城市详情：东京（tokyo.vue）(10.jpg);

}
购买（buy.vue）:{

5张轮播图，8个图表导航，某些商品列表(9.jpg)

点击更多有一个跳转页面（更多：more.vue）(5.jpg).
彩妆图表点击进去跳转（goods.vue）(6.jpg),
下面商品列表点击跳转(goods-detail.vue)(4.jpg)
八个路由：{
buy文件夹{
components文件夹：Navshop.vue
pages:{
	pageslist:{

				}
	routerview{

	}
	accessories.vue(配饰)
	ChildMom.vue(母婴)
	clother.vue(服饰)
	goods.vue(商品){

	}
	health.vue(保健)
	househome.vue(家居)
	more.vue(更多)
	personcare.vue(个人护理)

}

}
	
}

}
消息（message.vue）:{
动态(dynamic.vue),
互动(interation.vue):(16.jpg),->互动详情（interracdetail.vue）
通知（inform.vue）
}

我（mine.vue）：{
我的分享（myshare.vue）:(17.jpg)
我的求购(myrequst.vue)
}

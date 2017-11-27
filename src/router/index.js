import Vue from 'vue'
import Router from 'vue-router'
// 启动项
import Msconfig from '@/components/msconfig'
import Homepage from '@/components/Homepage'
// 主页
import Index from '@/components/index/Index'
// index里面的二级引入
import Recommend from '@/components/index/recommend/Recommend'
import Attention from '@/components/index/Attention'
import Nation from '@/components/index/Nation'
import Skincare from '@/components/index/Skincare'
import Fashion from '@/components/index/Fashion'
import Cosmetics from '@/components/index/Cosmetics'
//引入详情页面
import Detail from "../components/index/detail/detail"
import AttentionDetail from "../components/index/detail/attentionDetail"
import SkincareDetail from '../components/index/detail/SkincareDetail'
import CountryDetail from '../components/index/detail/countryDetail'
import FashionDetail from "../components/index/detail/fashionDetail"
import CosmeticsDetail from '../components/index/detail/cosmeticsDetail'


// 发现
import Find from '@/components/find/Find'


// 发现里面的二级路由
import FindView from '../components/find/view/findView';
import Asktobuy from '../components/find/findPages/askToBuy';
import GamBitView from '../components/find/view/gambitView'
import GamBit from '../components/find/findPages/gambit';
import NationView from '../components/find/view/nationview';
import Nations from '../components/find/findPages/nation';
import MoreTopicsView from '../components/find/view/moreTopicsView';
import MoreTopics from '../components/find/findPages/moreTopics';
import ShoppingMoreView from '../components/find/view/shoppingMoreView';
import ShoppingMore from '../components/find/findPages/shoppingmore'




// 信息
import Message from '@/components/message/Message'
import InteractDetail from "@/components/message/mesPages/mesDetail/interactDetail"

// 我的
import Mine from '@/components/mine/Mine'
//Mine的详情页
import ShareDetail from "../components/mine/mineDetail/shareDetail.vue";
import RequstDetail from "../components/mine/mineDetail/requstDetail.vue";
//购物车
import ShoppingCar from "../components/mine/minePages/shoppingCar.vue";
// 登录页面路由
import Login from "../components/mine/minePages/login.vue";
import Reg from "../components/mine/minePages/reg.vue";


//订单
import Order from "../components/mine/minePages/order"

//优惠券
import Youhuijuan from "../components/mine/minePages/youhuijian"

//收藏
import Collect from "../components/mine/minePages/collect"


// 购买
import Buy from '@/components/buy/Buy'
import Buycontent from "@/components/buy/buycontent"
// 商品里面的二级路由
import Goods from "../components/buy/pages/goods";
import Personcare from "../components/buy/pages/personcare";
import More from '../components/buy/pages/more';

// 搜索页面
import SearchGoods from "../components/buy/searchGoods";


// 商品详情页
import Detaillist from "../components/buy/pages/pageslist/details/detaillist";
import Detailshop from "../components/buy/pages/pageslist/details/detailshop";


Vue.use(Router);
export default new Router({
  routes: [
  // 登录
    {
      path:'/login',
      name:'login',
      component:Login
    },
    // 搜索
    {
      path:'/searchGoods',
      name:"searchGoods",
      component:SearchGoods
    },
     // 注册
    {
      path:'/reg',
      name:'Reg',
      component:Reg
    },
    //订单
    {
      path:'/order',
      name:'order',
      component:Order
    },

    //优惠券
    {
      path:'/youhuijuan',
      name:'youhuijuan',
      component:Youhuijuan
    },

    //收藏
    {
      path:'/collect',
      name:'collect',
      component:Collect
    },
    

    // index
    //详情路由
   {
      path:"/detail/:id",
      name:'detail',
      component:Detail        
    },
    {
      path:"/attentionDetail/:id",
      name:'attentionDetail',
      component:AttentionDetail
    },
    //国家详情
    {
      path:"/countryDetail/:id",
      name:'countryDetail',
      component:CountryDetail
    },
    //护肤详情
    {
      path:"/SkincareDetail/:id",
      name:'skincareDetail',
      component:SkincareDetail
    },
    //时尚详情
    {
      path:"/FashionDetail/:id",
      name:'fashionDetail',
      component:FashionDetail
    },

    //彩妆详情
    {
      path:"/CosmeticsDetail/:id",
      name:'cosmeticsDetail',
      component:CosmeticsDetail
    },
    {
         path:'/detaillist/:id',
        name:'Detaillist',
        component: Detaillist
      
      },
   
   {
      path:"/detailshop/:id",
      name:'detailshop',
      component:Detailshop 
              
    },

    {
      path: '/',
      name: 'msconfig',
      component: Msconfig
    },{
      path: '/Homepage',
      name: 'Homepage',
      component: Homepage,
      redirect:'/recommend'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
        redirect:'/recommend',
      children:[
      	{
      		path:"/recommend",
      		component:Recommend 
      	},
      	{
      		path:"/attention",
      		component:Attention 
      	},
      	{
      		path:"/nation",
      		component:Nation 
      	},
      	{
      		path:"/skincare",
      		component:Skincare
      	},
      	{
      		path:"/fashion",
      		component:Fashion
      	},
      	{
      		path:"/cosmetics",
      		component:Cosmetics
      	}
      ]
    },

{
      // 发现
      path: '/find',
      name: 'Find',
      component: Find
    },
      {
      path: '/findview',
      name: 'Findview',
      component: FindView,
       children:[
           {
              path:"asktobuy",
              name:'asktobuy',
              component:Asktobuy
           }
        ]
      },
      {
      path: '/gambitview',
      name: 'gambitview',
      component: GamBitView,
       children:[
           {
              path:"gambit/:id",
              name:'gambit',
              component:GamBit
           }
        ]
      },
      {
      path: '/nationview',
      name: 'nationview',
      component: NationView,
       children:[
           {
              path:"nations",
              name:'nations',
              component:Nations
           }
        ]
      },
       {
      path: '/moretopicsview',
      name: 'moretopicsview',
      component:MoreTopicsView,
       children:[
           {
              path:"moretopics",
              name:'moretopics',
              component:MoreTopics
           }
        ]
      },
       {
      path: '/shoppingmoreview',
      name: 'shoppingmoreview',
      component:ShoppingMoreView,
       children:[
           {
              path:"shoppingmore/:id",
              name:'shoppingmore',
              component:ShoppingMore
           }
        ]
      },


    // 购买开始

    {
      path: '/buy',
      name: 'Buy',
      component: Buy
    },
      {
       path: '/buycontent',
        name: 'Buycontent',
        component: Buycontent,
        children:[{
        path:'goods',
        name:'Goods',
        component: Goods
      }
       ,{
        path:'personcare/:id',
        name:'Personcare',
        component: Personcare
      },
       
      
      {
        path:'more',
        name:'More',
        component:More
      }]
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
  },
  // 消息详情
      {
        path:'/interactDetail/:id',
        name:'interactDetail',
        component:InteractDetail
      },
    
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    // shareDetail
    {
      path:'/shareDetail/:id',
      name:'shareDetail',
      component:ShareDetail
    },
    {
      path:'/shoppingCar',
      name:'shoppingCar',
      component:ShoppingCar
    },
       // requstDetail详情页
    {
      path:'/requestDetail/:id',
      name:'requstDetail',
      component:RequstDetail
    },
  ]
})

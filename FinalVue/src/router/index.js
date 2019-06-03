import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import News from '@/components/News'

import Login from '@/components/Login'
import admininfo from '@/components/Admin/Admininfo'
import adminadd from '@/components/Admin/Adminadd'
import bookadd from '@/components/Book/Bookadd'
import bookinfo from '@/components/Book/Bookinfo'
import userinfo from '@/components/User/Userinfo'
import useradd from '@/components/User/Useradd'
import charts from '@/components/BackStage/BackStageShow'
import borrowinfo from '@/components/Borrow/BorrowInfo'
import store from "../store";
Vue.use(Router)

const router=new Router({
  linkActiveClass:'active',
  mode: 'history',
  routes: [
    {
      path:'/',
      meta: {
        isLogin:false
      },
      name:'图书管理系统',
      component:Login,

    },
    {

      path:'/index',


      component:Index,

      name:'首页',
      meta:{
        isLogin: true//是否进行登录验证
      },

      children:[{
        path:'/news',
        component:News,
        name:'系统资讯',
        meta:{
          isLogin: true//是否进行登录验证
        },

        // meta:{
        //   isLogin: true//是否进行登录验证
        // },
        // children:[
        //   {
        //     // meta:{
        //     //   isLogin: true//是否进行登录验证
        //     // },
        //   }
        // ],
        // meta:{
        //   isLogin: true//是否进行登录验证
        // },


      }

      ]
    },

    {
      path: '/index',
      component:Index,
      name:'人员管理',
      children:[
        {
          path: '/admininfo',
          name: '管理员信息',
          component:admininfo,
          meta:{
            isLogin: true//是否进行登录验证
          },

        },
        {
          path:'/adminadd',
          name:'管理员添加',
          component:adminadd,
          meta:{
            isLogin: true//是否进行登录验证
          },

        },
        {
          path: '/userinfo',
          name: '普通会员信息',
          component:userinfo,
          meta:{
            isLogin: true//是否进行登录验证
          },

        },
        {
          path: '/useradd',
          name: '普通会员添加',
          component:useradd,
          meta:{
            isLogin: true//是否进行登录验证
          },

        }
        ],
    },
    {
      path: '/index',
      component:Index,
      name:'图书管理',
      children:[
        {
          path: '/bookinfo',
          name: '图书信息',
          component: bookinfo,
          meta:{
            isLogin: true//是否进行登录验证
          },
        },
        {
          path:'/bookadd',
          name:'图书添加',
          component:bookadd,
          meta:{
            isLogin: true//是否进行登录验证
          },
        }
      ],
    },
    {
      path: '/index',
      component:Index,
      name:'借阅管理',
      children:[
        {
          path: '/test',
          name: '借阅信息',
          component:borrowinfo,
          meta:{
            isLogin: true//是否进行登录验证
          },

        }

      ],
    },
    {
      path:'/index',
      component:Index,
      name:'后台管理',
      children:[
        {
          path:'/backstage',
          component:charts,
          name:'流量显示',
          meta:{
            isLogin: true//是否进行登录验证
          },
        }
      ]

    },




  ]
});
router.beforeEach((to, from, next) => {

  //获取用户登录成功后储存的登录标志
  let getFlag = localStorage.getItem("Flag");

  //如果登录标志存在且为isLogin，即用户已登录
  if(getFlag === "isLogin"){

    //设置vuex登录状态为已登录
    store.state.isLogin = true
    next();

    //如果已登录，还想想进入登录注册界面，则定向回首页
    if (!to.meta.isLogin) {
      //iViewUi友好提示
      // iView.Message.error('请先退出登录')
      alert('请先安全退出系统')
      next({
        path: '/news'
      })

    }
    else if (to.meta.isLogin){
      next();
    }


    //如果登录标志不存在，即未登录
  }else{

    //用户想进入需要登录的页面，则定向回登录界面
    if(to.meta.isLogin){
      next({
        path: '/',
      })
      //iViewUi友好提示
      // iView.Message.info('请先登录')
      //用户进入无需登录的界面，则跳转继续
    }else{
      next()
    }

  }

});

router.afterEach(route => {
  window.scroll(0, 0);
});
export default router;




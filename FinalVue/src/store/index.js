import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const  store =new Vuex.Store({
  state: {
    isLogin: false,
    current:null
  },

  // 获取属性的状态
  getters: {
    //获取登录状态
    isLogin: state => state.isLogin,
    currentUser:state => state.current
  },

  // 设置属性状态
  mutations: {
    //保存登录状态
    userStatus(state, flag) {
      state.isLogin = flag
    },
    userStatus2(state,user){
      if (user){
        state.currentUser = user
//    state.isLogin = true
      }else if(user==null){
        //退出的时候清空sessionStorage里的东西
        sessionStorage.setItem('userName',null);
        //  sessionStorage.setItem('userToke','');
        state.currentUser = null;
        //  state.isLogin = false;
      }
    }

  },

  // 应用mutations
  actions: {
    //获取登录状态
    userLogin({commit}, flag) {
      commit("userStatus", flag)
    },
    setUser({commit},user){
      commit("userStatus2",user)
    }
  }
})
export default store

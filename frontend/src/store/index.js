import Vue from 'vue'
import Vuex from 'vuex'
/* import actions from './actions'
import mutations from './mutations'
import modules from './modules' */

Vue.use(Vuex)
export default new Vuex.Store({
  /* actions,
  mutations,
  modules */
  state: {
    totalUsers: 0,
    login: false,
    userName: null,
    userId: null,
    menu: [
      { index: '/', route: '/', name: '首页' },
      { index: '/mine', route: 'mine', name: '我的问卷' },
      { index: '/edit', route: 'edit', name: '创建新问卷' },
      { index: '/help', route: 'help', name: '帮助' }
    ]
    // getQuestionaires
  },
  getters: {
    loginStatus: state => {
      return state.login
    },
    totalCount: state => {
      return state.totalUsers.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1 ')
    },
    menu: state => {
      if (state.login) {
        return state.menu.concat([{ index: '', name: '退出登录' }])
      } else {
        return state.menu.concat([{ index: '/login', route: 'login', name: '登录' }])
      }
    },
    currentUser: state => {
      return {
        userName: state.userName,
        userId: state.userId
      }
    }
  },
  mutations: {
    login: (state, payload) => {
      state.login = true
      state.userName = payload.name
      state.userId = payload.id
    },
    logout: (state) => {
      state.login = false
      state.userName = null
      state.userId = null
    },
    setTotalUser: (state, payload) => {
      state.totalUsers = payload.count
    }
  }
})

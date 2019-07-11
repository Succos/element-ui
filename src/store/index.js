import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import login from './modules/login'
import tagsView from './modules/tagsView'
import permission from './modules/permission'
Vue.use(Vuex)
// 注入权限，生成权限路由表
const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    login,
    tagsView,
    permission

  },
  getters
})

export default store

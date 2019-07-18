
const state = {

}

const mutations = {

}

const actions = {
  article({ commit }, userInfo) {
    console.log("触发article这个事件")
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}


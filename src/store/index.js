import Vue from 'vue'
import Vuex from 'vuex'

import Cookies from 'js-cookie'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name:Cookies.get('username'),
    headpic:Cookies.get('headpic')
  },
  mutations: {
    getLogin(state,username){
      state.name = username;
    },
    getHeadpic(state,headpic){
      state.headpic = headpic
    }
  },
  getters:{},
  actions:{}
})

export default store;

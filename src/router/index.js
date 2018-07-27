import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import Register from '../pages/Register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/' ,redirect:'/App'},
    {path: '/App', component: App},
    {path: '/Register', component: Register},
  ]
})

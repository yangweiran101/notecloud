import Vue from 'vue'
import Router from 'vue-router'
import Register from '../pages/Register.vue'
import Home from '../pages/Home.vue'
import Write from '../pages/Write'
import Detail from '../pages/Detail'
import Search from '../pages/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Home},
    {path: '/Register', component: Register},
    {path: '/Write', component: Write},
    {path: '/Detail', component: Detail},
    {path: '/Search', component: Search},
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Register from '../pages/Register.vue'
import Home from '../pages/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Home},
    {path: '/Register', component: Register}
  ]
})

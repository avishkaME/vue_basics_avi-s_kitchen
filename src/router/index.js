import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddMenu from '@/components/AddMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, 
    {
      path: '/add-menu',
      name: 'AddMenu',
      component: AddMenu
    },  
       

  ]
})

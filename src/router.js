import Vue from 'vue'
import Router from 'vue-router'
import Discover from './views/Discover.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'discover',
      component: Discover
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('./views/Create.vue')
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('./views/Work.vue')
    },
    {
      path: '/play',
      name: 'play',
      component: () => import('./views/Play.vue')
    },
    {
      path: '/develop',
      name: 'develop',
      component: () => import('./views/Develop.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('./views/Categories.vue')
    },
    {
      path: '/updates',
      name: 'updates',
      component: () => import('./views/Updates.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/story',
      name: 'story',
      props: true,
      component: () => import('./views/Story.vue')
    },
    {
      path: '/product',
      name: 'product',
      props: true,
      component: () => import('./views/Product.vue')
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import EnterPage from '@/components/EnterPage'
import HelpPage from '@/components/HelpPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'EnterPage',
      component: EnterPage
    },
    {
      path: '/help',
      name: 'HelpPage',
      component: HelpPage
    }
  ]
})

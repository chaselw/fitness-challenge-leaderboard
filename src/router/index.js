import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/WelcomePage')
  },
  {
    path: '/user/goals',
    name: 'goals',
    component: () => import('../components/CreateEditGoals')
  },
  {
    path: '/groups',
    name: 'groups',
    component: () => import('../components/GroupsPage')
  },
  {
    path: '/leader-board',
    name: 'leaderboard',
    component: () => import('../components/LeaderBoard')
  }
]
const router = new VueRouter({
  routes
})
export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import Recommend from '@/views/recommend'
import Singer from '@/views/singer'
import SingerDetail from '@/views/singer-detail'
import TopList from '@/views/top-list'
import Search from '@/views/search'
import Player from '@/components/player/player'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend
  },
  {
    path: '/singer',
    component: Singer,
    name: 'singer',
    children: [
      {
        path: ':id',
        name: 'singer-detail',
        component: SingerDetail
      }
    ]
  },
  {
    path: '/top-list',
    name: 'TopList',
    component: TopList
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/player',
    name: 'player',
    component: Player
  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

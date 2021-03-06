import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueLazy from 'vue3-lazy'
import loadingDirective from '@/components/base/loading/directive'
import noResultDirective from '@/components/base/no-result/directive'

import '@/assets/scss/index.scss'
createApp(App)
  .use(store)
  .use(router)
  .use(vueLazy, {
    loading: require('@/assets/images/logo.png')
  })
  .directive('loading', loadingDirective)
  .directive('no-result', noResultDirective)
  .mount('#app')

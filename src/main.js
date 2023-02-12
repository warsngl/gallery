import { createApp } from 'vue'
import { createRouter,createWebHashHistory } from 'vue-router'

import store from './store'
import App from './App.vue'
import main from './mixins/main.js'
import './assets/index.css'
import Home from './components/Home.vue'
import ID from './components/_id.vue'

const routes=[
  {path:'/', component: Home},
  {path:'/:id', component: ID},
]
const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

createApp(App).use(router).mixin(main).use(store).mount('#app')

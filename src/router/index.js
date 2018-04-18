import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Index from '../pages/index.vue';
import topic from '../pages/topic.vue'
import newsOther from '../pages/newsOther.vue'
import tech from '../pages/tech.vue'

import blockchain from '../pages/blockchain.vue'



export default new Router({
    routes:[
        {
          path: '/',
          component: Index,
          redirect: '/topic',
          children:[
              {
                path: 'topic',
                component:topic,
              },
              {
                path: 'tech',
                component:tech,
              },
              {
                path: 'blockchain',
                component:blockchain,
              },
              {
                path: 'news',
                component:newsOther,
              }
              
          ]
        }
    ]
})

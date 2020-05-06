import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const routers = [
    {
      path: '/helloWorld', component: () => import('./components/HelloWorld.vue'),
    },
    {
      path: '/join', component: () => {
        import('../src/views/join/join')
      } 
    },
    {
      path: '/fundation', component: () => {
        import('./components/fundation.vue')
      }  
    },
  ];
const router = new VueRouter({
    mode: 'history',
      base: process.env.BASE_URL,
      routers
  });
  export default router
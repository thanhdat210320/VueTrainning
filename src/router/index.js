import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import Chat from '../pages/chat';
import User from '../pages/User';
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/Login', component: Login },
    { path: '/chat', component: Chat },
    { path:'/User', component: User},
  ],
});
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';

Vue.use(BootstrapVue);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
  ],
});

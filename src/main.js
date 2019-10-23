import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import VueRouter from "vue-router";
import indexPage from "./components/indexPage.vue";
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueRouter);

const Routers = new VueRouter({
  routes:[
    {
      path: '/',
      component: indexPage,
    },
  ],
});


new Vue({
  render: h => h(App),
  router: Routers,
}).$mount('#app');

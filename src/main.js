import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import VueRouter from "vue-router";
import detectorPage from "./components/detectorPage.vue";
import generatorPage from "./components/generatorPage.vue";
import mainPage from "./components/mainPage.vue";
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueRouter);

const Routers = new VueRouter({
  routes:[
    {
      path: '/detect',
      component: detectorPage,
    },
    {
      path: '/generate',
      component: generatorPage,
    },
    {
      path: '*',
      component: mainPage,
    },
  ],
});

new Vue({
  render: h => h(App),
  router: Routers,
}).$mount('#app');

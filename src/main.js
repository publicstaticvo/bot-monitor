import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import VueRouter from "vue-router";
import detector from "./components/detector.vue";
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueRouter);

const Routers = new VueRouter({
  routes:[
    {
      path: '/detect',
      component: detector,
    },
  ],
});

new Vue({
  render: h => h(App),
  router: Routers,
}).$mount('#app');

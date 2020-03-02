import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";

Vue.use(ViewUI);
Vue.config.productionTip = false;
//这里的key不能修改，包括大小写
new Vue({
  router,
   store,
  render: h => h(App)
}).$mount("#app");

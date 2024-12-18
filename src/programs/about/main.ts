import Vue from "vue";
import App from "./App.vue";
import DataV from "@jiaminghi/data-view";
import "normalize.css";

Vue.config.productionTip = false;
Vue.use(DataV);
new Vue({
  render: (h) => h(App),
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";

Vue.config.productionTip = false;

new Vue({
    router, // eslint-disable-line
    store, // eslint-disable-line
    render: h => h(App) // eslint-disable-line
}).$mount("#app"); // eslint-disable-line
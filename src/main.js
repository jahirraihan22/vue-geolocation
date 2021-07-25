import Vue from "vue";
import App from "./App.vue";

import VueGeolocatoin from "vue-browser-geolocation";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;
Vue.use(VueGeolocatoin);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCBXk-KNu7-FN7Rv4i4Aege0iIuqBpZOYQ",
  },
  installComponents: false,
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");

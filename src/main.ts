import { createApp } from "vue";
import { createPinia } from "pinia";
import { registerScrollSpy } from 'vue3-scroll-spy';

import App from "./App.vue";
import router from "./router";

import './index.css'

const clickOutside = {
    beforeMount: (el, binding) => {
      el.clickOutsideEvent = event => {
        // here I check that click was outside the el and his children
        if (!(el == event.target || el.contains(event.target))) {
          // and if it did, call method provided in attribute value
          binding.value();
        }
      };
      document.addEventListener("click", el.clickOutsideEvent);
    },
    unmounted: el => {
      document.removeEventListener("click", el.clickOutsideEvent);
    },
  };

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.directive("click-outside", clickOutside)

registerScrollSpy(app);

app.mount("#app");

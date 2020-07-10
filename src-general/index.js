import Vue from "vue/dist/vue";
import components from '../areas/src-trader'
import "./styles/global.scss";
import "normalize.css";

const app = new Vue({
  el: "#app",
  components
});

window.app = app;

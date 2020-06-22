import Vue from 'vue/dist/vue'
import components from '../areas/src-two'

const app = new Vue({
  el: '#app',
  components
})

window.app = app

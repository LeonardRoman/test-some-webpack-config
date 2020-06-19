import component from '../areas/src-two/two'

import Vue from 'vue/dist/vue'

let element = component()
document.body.appendChild(element)

const app = new Vue({
  el: '#app'
})

window.app = app

import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import lightBoxCont from './components/lightBoxCont.vue'

const timeSettings = {
  timeGreen: 15,
  timeYellow: 3,
  timeRed: 10,
  timeBlink: 3,
}

export { timeSettings }

const screenGreen = { 
  data: function () {
    return {
      stime: (timeSettings.timeGreen - timeSettings.timeBlink)
    }
  }, 
  template: '<lightBoxCont activeColor="green" :solidTime="stime"></lightBoxCont>' 
}

const screenYellow = { 
  data: function () {
    return {
      stime: (timeSettings.timeYellow - timeSettings.timeBlink)
    }
  }, 
  template: '<lightBoxCont activeColor="yellow" :solidTime="stime"></lightBoxCont>' 
}

const screenRed = { 
  data: function () {
    return {
      stime: (timeSettings.timeRed - timeSettings.timeBlink)
    }
  }, 
  template: '<lightBoxCont activeColor="red" :solidTime="stime"></lightBoxCont>' 
}

Vue.use(Router)
Vue.component('lightBoxCont', lightBoxCont)

const router = new Router({
  routes: [
    {
      path: '/', redirect: '/green',
      component: screenGreen,
    },
    {
      path: '/green',
      component: screenGreen,
    },
    {
      path: '/yellow',
      component: screenYellow,
    },
    {
      path: '/red',
      component: screenRed,
    },
  ]
 })

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
})
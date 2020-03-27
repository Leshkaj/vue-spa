<template>
  <div id="app">
    <header>
      <h1>Эмулятор светофора</h1>
    </header>
    <main>
      <div class="lightbox">
        <router-view></router-view>
        <lightBoxTime :counter="counter"></lightBoxTime>
      </div>
    </main>
  </div>
</template>

<script>
import lightBoxTime from './components/lightBoxTime.vue'
import { timeSettings } from './main.js'
export default {
  name: 'app',
  components: {
    lightBoxTime
  },
  data () {
    return {
      nextScreen: null,
      counter: 0,
      timeouts: []
    }
  },
  created(){
    this.initNextScreen(this.$route.path);
  },
  mounted() {
    this.$router.afterEach((to, from) => {
      this.initNextScreen(this.$route.path);
      this.timeouts.forEach(timeout => {clearTimeout(timeout)});
      this.timeouts = [];
      this.countDown();
    });
    this.countDown();
  },
  methods: {
    initNextScreen(path){
      switch (path){
        case '/':
        case '/green':
          this.counter = timeSettings.timeGreen;
          this.nextScreen = '/yellow';
          break;
        case '/yellow':
          this.counter = timeSettings.timeYellow;
          this.nextScreen = '/red';
          break;
        case '/red':
          this.counter = timeSettings.timeRed;
          this.nextScreen = '/green';
          break;
      }
    },
    countDown(){
      if (this.counter) {
        let newTimeout = setTimeout(() => {
          --this.counter;
            this.countDown()
        }, 1000);
        this.timeouts.push(newTimeout);
        return newTimeout;
      }
      this.$router.push(this.nextScreen);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <router-view></router-view> -->
  <h1>2123</h1>
  <HelloWorld v-if="show"></HelloWorld>
  <button @click="show=!show">点击观察控制台</button>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { defineAsyncComponent } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import ErrorComponent from '@/components/fail.vue'
import LoadingComponent from '@/components/loading.vue'

export default {
  name: 'App',
  data(){
        return {
            show:false,
        }
    },
  components: {
    HelloWorld:defineAsyncComponent({
            loader:()=> import('@/components/HelloWorld.vue'),
            errorComponent: ErrorComponent,
            loadingComponent:LoadingComponent,
            delay: 200,
            timeout: 1000,
            // loadingComponent: LoadingComponent
        }), 
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

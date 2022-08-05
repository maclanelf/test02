<template>
    <!-- <h1>vue3.0新特性相关知识点</h1>
    <ul v-for="(item,index) in resultList" :key="index">
        <li class="lispan"><h5 style="text-align:left;text-decoration:underline" @click="goPage(index)">{{index+1+"."+item}}</h5></li>
    </ul> -->
    <h3>test</h3>
    <HelloWorld v-if="show"></HelloWorld>
    <button @click="show=!show">点击观察控制台</button>
</template>
<script>
import { defineAsyncComponent } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import ErrorComponent from '@/components/fail.vue'
import LoadingComponent from '@/components/loading.vue'
export default {
    data(){
        return {
            show:false,
            resultList:[
                "ref,reactive,toRef(),toRefs()函数之间的区别",
                "props,context参数使用",
                "Teleport的使用",
                "emits自定义事件,父子组件双向绑定",
                "单文件组件组合式api",
                "关于异步组件(非新特性)",
                "关于自定义指令内部的钩子函数(非新特性)",
                "监听子组件的生命周期钩子函数名称变更(非新特性)",
                "vue3.0片段支持多根节点"
            ],
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
    methods:{
        goPage(index){
            this.$router.push("/letter"+(index+1))
        },
        
    },
    mounted(){
        this.$store.commit('setOverload','init')
        console.log(this.$store.state.overload);
    }
}
</script>
<style scoped>
.lispan:hover{
    cursor:pointer
}
</style>

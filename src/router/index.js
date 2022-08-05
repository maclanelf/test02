import { createRouter,createWebHashHistory} from "vue-router";

//监测components目录自动生成一级路由
let routerArr = []
const contexts = require.context('../components', true, /\.vue$/)
contexts.keys().forEach(value => {
  const path = value.substr(value.indexOf('/'), value.lastIndexOf('.') - 1)
  const componentLocation = value.substr(value.indexOf('.') + 1, value.lastIndexOf('.') - 1)
  const componentName = componentLocation.substr(componentLocation.lastIndexOf('/') + 1)
  routerArr.push({
    path: path,
    name: componentName,
    component: () => import(/* webpackChunkName: "alarm" */ `../components${componentLocation}`)
  })
})

//监测views目录自动生成一级路由
let routerArrSrc = []
const contextsrc = require.context('../views', true, /\.vue$/)
contextsrc.keys().forEach(value => {
  const path = value.substr(value.indexOf('/'), value.lastIndexOf('.') - 1)
  const componentLocation = value.substr(value.indexOf('.') + 1, value.lastIndexOf('.') - 1)
  const componentName = componentLocation.substr(componentLocation.lastIndexOf('/') + 1)
  routerArrSrc.push({
    path: path,
    name: componentName,
    component: () => import(/* webpackChunkName: "alarm" */ `../views${componentLocation}`)
  })
})

//如果需要嵌套路由,则在这里处理,这里写个例子
/* routerArr.some((element)=>{
    if (element.name=='') {
      let arr = [
        {
          path:'xxx',
          name:'xxx',
          component: () => import(`../views/letter1.vue`)
        }
      ]
      element.children = arr
    }
}) */

const routes = [
  ...routerArr,
  ...routerArrSrc,
  {
    path: '/',
    name: 'homepage',
    component: () => import('../views/homepage.vue')
  },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
  })

export default router
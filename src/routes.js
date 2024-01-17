import csuiteondeck from './components/c-suite-on-deck'
//import Home from './components/Home'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    

    {
        name: 'csuiteondeck',
        component: csuiteondeck,
        path: '/c-suite-on-deck'
    },
    {
        name: 'csuiteondeck',
        component: csuiteondeck,
        path: '/'
    },
    // {
    //     name: 'Home',
    //     component: Home,
    //     path: '/'
    // },
   
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router
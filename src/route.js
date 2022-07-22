import { createWebHashHistory,createRouter } from "vue-router";
import Hello from './components/HelloWorld.vue';
import about from './components/about.vue';
import home from './components/home.vue';
import login from './components/login.vue';
import PageNotFound from './components/PageNotFound.vue';

const routes=[
    {
        name:'home',
        path:'/',
        component:Hello
    },
    {
    name:'about',
    path:'/about',
    component:about
    },
    {
        name:'homeI',
        path:'/homeI',
        component:home
    },
    {
        name:'login',
        path:"/login",
        component:login
    },
    {
        name:'pageNot',
        path:'/patchMatch(.*)*',
        component:PageNotFound
    }
];

const router=createRouter({history:createWebHashHistory(),routes});
export default router;
import {createWebHistory, createRouter} from 'vue-router';
import Main from '@/views/Main';
import Asset from '@/views/Asset';
import Stock from '@/views/Stock';

const routes = [ 
    {path: "/", name:"Main", component: Main}, 
    {path: "/asset", name:"Asset", component: Asset}, 
    {path: "/stock", name:"Stock", component: Stock}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;





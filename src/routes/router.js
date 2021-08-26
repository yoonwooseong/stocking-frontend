import {createWebHistory, createRouter} from 'vue-router';
import Main from '@/views/Main';
import Asset from '@/views/Asset';
import Stock from '@/views/Stock';
import SignUp from '@/views/SignUp';
import SignIn from '@/views/SignIn';

const routes = [ 
    {path: "/", name:"Main", component: Main}, 
    {path: "/asset", name:"Asset", component: Asset}, 
    {path: "/stock", name:"Stock", component: Stock},
    {path: "/signUp", name:"SignUp", component: SignUp},
    {path: "/signIn", name:"SignIn", component: SignIn}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
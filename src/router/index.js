/*
 * @Des: 页面、组件说明
 * @Author: Reda
 * @Date: 2021-12-19 15:01:20
 * @query: {string} q1  内容ID
 * @props: {string} p2  数据源
 * @event: {string} p1  des
 */
// step 1 客户端渲染

/* import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
]

export default new Router({
    mode: 'history',
    routes
}) */


// step 2 服务端渲染
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

// 为什么返回的是一个工厂函数，而不是 router实例？
export function createRouter() {
    return new Router({
        mode: 'history',
        routes
    })
}

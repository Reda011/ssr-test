// step 1 客户端渲染

/* import Vue from 'vue';
import App from './App.vue';
import router from './router'


new Vue({
    router,
    render: h => h(App),
    el: '#app'
}) */

// step 2 服务端渲染
import Vue from 'vue';
import App from './App.vue';
import {createRouter} from './router';
import { createStore } from './store'

// 为什么返回的是一个工厂函数，而不是 vue实例？
export function createVue() {
    const router = createRouter();
    const store = createStore();

    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })

    return app
}
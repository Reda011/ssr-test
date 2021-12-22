// 客户端挂载、激活 app

/* 
    所谓客户端激活，指的是 Vue 在浏览器端接管由服务端发送的静态 HTML，
    使其变为由 Vue 管理的动态 DOM 的过程。 
    激活原理参考 https://ssr.vuejs.org/zh/guide/hydration.html。 
*/

import {createVue} from './main';

const app = createVue();
const router = app.$router;
/* const store = app.$store

if (window.__INITIAL_STATE__) {   //如果window.__INITIAL_STATE__有内容，就存到app.$store中
  store.replaceState(window.__INITIAL_STATE__)
} */

router.onReady(() => {
    app.$mount('#app')
})
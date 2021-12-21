// 服务端入口

import { createVue } from './main';

export function createApp(context) {
  // 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个 Promise，
    // 以便服务器能够等待所有的内容在渲染前，
    // 就已经准备就绪。
  return new Promise((resolve, reject) => {
    const app = createVue();
    const router = app.$router;
    const store = app.$store;

    const { url } = context    //context包含服务端需要传递给Vue实例的一些数据，比如这里的路由
    const { fullPath } = router.resolve(url).route;

    if(fullPath !== url){  //判断当前路由在Vue实例中是否存在
      return reject({
        url: fullPath
      })
    }

    router.push(url)      //设置Vue实例的当前路由

    // 等到 router 将可能的异步组件和钩子函数解析完
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      // console.log('===entry-server :', matchedComponents);

      // 匹配不到的路由，执行 reject 函数，并返回 404
      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }
      
      Promise.all(matchedComponents.map(Component => {
        if (Component.asyncData) {
          //如果组件暴露出 asyncData，就调用这个方法
          //在本例中，就会去请求豆瓣数据，并把数据更新到app.$store.state
          return Component.asyncData({  
            store,
            // route: router.currentRoute
          })
        }
      })).then(() => {
        // console.log(store.state);

        context.state = store.state  //将app.$store.state赋值给渲染上下文context.state，后面同步数据到客户端的时候会用到。

        // Promise 应该 resolve 应用程序实例，以便它可以渲染
        resolve(app)
      }).catch(reject)
    }, reject)
  })
}
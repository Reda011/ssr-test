// 服务端渲染
const Vue = require('vue');

// step1 服务端输出 固定vue项目
/* const server = require('express')();
// vue-server-renderer 核心，可基于vue实例 生成html字符串
const renderer = require('vue-server-renderer').createRenderer();

server.get('/', (req, res) => {
  const app = new Vue({
    data: {
      from: 'Vue'
    },
    template: `<div>这是一个{{from}}项目</div>`
  })


  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    // console.log('===', html);
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Hello</title>
            </head>
            <body>
                ${html}
            </body>
        </html>
    `)
  })
}) */

// step3 使用模板文件
/* const server = require('express')();
// vue-server-renderer 相关使用文档 见：https://ssr.vuejs.org/api/
const template = require('fs').readFileSync('./template/index.template.html', 'utf-8')
const renderer = require('vue-server-renderer').createRenderer({template});

const context = {
    title:"vue SSR测试",
    metas: `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    `
}

server.get('/', (req, res) => {
  const app = new Vue({
    data: {
      from: 'Vue'
    },
    template: `<div>这是一个{{from}}项目</div>`
  })


  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    // console.log('===', html);
    res.end(html);
  })
}) */


// step 4 服务端渲染
const path = require('path');
const expess = require('express');
const server = expess();
// vue-server-renderer 相关使用文档 见：https://ssr.vuejs.org/api/
const template = require('fs').readFileSync('server/template/index.template.html', 'utf-8')
const renderer = require('vue-server-renderer').createRenderer({template});
const {createApp} = require('../dist/bundle.server.js');

server.use(expess.static(path.join(__dirname, '../dist')));

server.get('*', async (req,res) => {
    const context = {
      title:"vue SSR测试",
      url: req.url,
      metas: `
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      `
    };

    await createApp(context).then(app => {
        renderer.renderToString(app, context, (err, html) => {
          if(err){
            if (err.code === 404) {
              res.status(404).end('Page not found')
            } else {
              res.status(500).end('Internal Server Error')
            }
          } else {
            res.end(html);
          }
        })
    }).catch(e => {
        console.log('catch:', e);
    })
})


server.listen(3000, () => {
    console.log('当前运行在 3000端口');
})
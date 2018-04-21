## 项目介绍

**高仿ReadHub，项目中整合 vue + node + mongodb + express + axios  + vue-router，一个前端全栈简单Demo**

## 完成功能列表

- [x] 爬虫爬取ReadHub网页数据并且存储到mongo数据库

- [x] 分页接口

- [x] vue全局过滤器

- [x] ReadHub热门话题

- [x] ReadHub科技动态

- [x] ReadHub开发者咨询

- [x] ReadHub区块链快讯

- [x] 滚动分页加载

### 目录结构

<pre>
├── build			        // webpack及Node相关配置
├── config			        // 项目dev和prod环境的配置
├── dist			        // 项目build打包之后的目录
├── node_modules		    // npm包
├── index.html			    // 项目入口文件
├── package.json		    // 项目描述文件
├── markdownImg			    // 项目readme图
├── server			        // node服务文件
│   ├── model				// 数据模型文件
│   │   ├──news.js          // 科技动态 model
│   │   ├──topic.js         // 热门话题 model
│   ├── router				// 
│   │   ├──api.js           // 热门话题 router
│   │   ├──news.js          // 科技动态 router
│   └── personal			// 个人中心控制器，包括资料修改、头像上传等
├── src					// 前端目录
│   ├── assets				// 图片资源
│   ├── components			// 项目所有组件，每个文件头部都有组件名称注释
│   ├── router				// Vue路由
│   ├── filter				// 定义过滤器文件
│   ├── pages               // 业务页面
│   ├── utils               // 通用方法文件
│   ├── permission.js       // 对路由做一系列操作
│   ├── App.vue				// 主页面 
│   └── main.js				// Webpack 预编译入口
├── static			// 前端公用静态文件目录
│   ├── css         
│   ├── images          
│   ├── js     
│   ├── less         
│   └── upload
├── .babelrc			// ES6等babel的一些配置
├── .editorconfig		// 编辑器的一些配置
├── .eslintignore		// 忽略语法检查的目录文件，一般是忽略build和config目录
├── .eslintrc.js		// eslint的配置文件
</pre>

## 一、效果图

![](./markdownImg/expressdemo.gif)

看完最终完成的效果图，接下来，开始我们的实战之旅吧 ~



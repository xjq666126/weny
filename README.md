<p align="center">
<img src="./app/src/assets/logo.png" alt="broccoli" width="100">
</p>
<h1 align="center">Kelp and Broccoli Uni</h1>

[![](https://img.shields.io/badge/-KelpAndBroccoli-%2350c62a)](https://github.com/cleves0315/kelp-and-broccoli-uni)
![](https://img.shields.io/badge/todo-list-%2350c62a)
- jinqiang.xiao  
- 项目开发技术： uni-app + vue3 + ts + pinia + vite 这是前提！
- 个人vscode开发， 工具自选
- 项目使用 vue3 与 ts 语法
- uni-ui 组件库 https://zh.uniapp.dcloud.io/component/uniui/uni-ui.html
- 请修改 config.js 文件中的配置 appId 为自己的 appId
- cd client 执行 yarn install 安装依赖
-  npm run dev:XXX 启动相关服务
- 打开 微信小程序开发者工具，选择项目dist文件下，点击预览，即可预览小程序
- 修改文件后 会自动更新到微信小程序开发工具
- 其他场景 参考package.json 命令 


## 介绍
### 文件目录
#### mock 是本地mock数据 按照每个页面一个文件mock 配置
#### services 是接口请求 按照每个页面一个文件api 定义
#### constants 是常量配置
#### utils 是工具函数
#### pages 是页面配置
#### components 是公共组件
#### static 是静态资源
#### store 是pinia

-- TODO（已完成） --
##  域名的下发 及本地mock配置
### untils / config.service
```
if (process.env.NODE_ENV == 'development') {
	BASE_URL = '/api/'; // 开发环境
} else {
	BASE_URL = 'http://boot.jeecg.org/api/'; // 生产环境
}
```
### development 环境下 走本地mock ，修改后可以本地开发可以使用指定的环境域名
#### 生产环境 一定要提前配置好  打包在dist目录下
### BASE_URL

-- TODO --
## mock 热更

-- TODO --
## 小程序开发者自启动

-- TODO --
## TS 语法 校验

<p>
<img src="./assets/example1.jpeg" alt="diagram1" width="270">
<img src="./assets/example2.jpeg" alt="diagram2" width="270">
<img src="./assets/example3.png" alt="diagram3" width="270">
</p>

## 功能

-  login 登陆
- list 列表
- mine 我的

## 预览/体验

<img src="./assets/QRcode.jpeg" alt="QRcode" width="150">


我们在添加easycom的时候，发现pages.json文件中的注释是有错误提示的，我们想让Json文件中可以有注释，至少pages.json和manifest.json两个文件这种可以有注释，这个我们需要在VSCode中配置一下，打开文件->首选项->设置，如图：

然后我们在文本编辑器中找到文件，再在Associations中添加项


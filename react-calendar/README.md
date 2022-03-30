## 快速上手 此分支为最新的稳定版本，在项目中测试

```bash


 线上地址：
 原型地址：
 接口地址：
 ui地址：

官方源太卡了，换了淘宝源
# 安装
$ yarn global add umi  或者 $ npm install -g umi

$ yarn  或者  npm i

# 新建页面
$ umi generate page index

# 本地开发
$ umi dev 或者 $ npm run start


```

## 构建上线
```bash
# develop 打包后上传

$ npm run build

# master 打包则需合并代码后打包上传

$ npm run product

# 打包配置：

master在.umirc.product.ts 配置publicPath 和接口
develop.umirc.dev.ts 配置publicPath 和接口
```


## 项目结构

```
—src 根目录

  - assets 本地静态文件
  - component 组件类
  - layout 全局样式包括侧边栏等
  - models 数据层文件
  - page  功能页面
  - routers  路由解析规则
  - server  请求接口

  - utils  全局工具类
    - request.js  全局请求封装
    - toolClass  工具类
    - proxy.js  接口请求域名
    - errorRequest  接口错误请求处理方式

  - .umirc.js 全局打包基础配置文件   ----本地开发
  - .umirc.dev.js 测试环境全局打包配置文件
  - .umirc.product.js 正式环境全局打包配置文件
```

## 项目框架

```
-底层构建
  -umi 3.2.3及其以上版本  此版本我单独配置了打包优化项，打包大项目会更快

-兼容浏览器
  @babel/polyfill ^7.10.4及其以上版本

-ui库
  antd 4.5.2及其以上版本

-view层
  react 16.12.0及其以上版本

-数据层
  dva 2.6.0-beta.6及其以上版本

-请求
  自己稍加封装的结合umi-request 的fetch

-路由
  react-router 5及其以上版本

-测试
  可使用jest进行单元测试

-语言
  es6即es2015及其以上版本

  兼容ts tsx typescript3.8.3及其以上版本



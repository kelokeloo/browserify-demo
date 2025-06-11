# Browserify Demo

一个简单的 Browserify 示例项目，展示如何在浏览器端使用 Node.js 风格的模块系统。

## 项目介绍

这个示例项目展示了如何使用 Browserify 在浏览器中使用 CommonJS 模块系统（Node.js 风格的 require() 语法）。项目中使用了 moment.js 库来格式化日期和时间。

## 功能

- 在浏览器中显示当前日期和时间
- 演示如何使用 Browserify 将 Node.js 模块打包成浏览器可用的 JavaScript

## 技术栈

- Browserify - JavaScript 模块打包工具
- Moment.js - 日期时间处理库

## 安装

```bash

# 或使用 yarn
yarn
```

## 使用方法

1. 启动项目：

```bash
# 使用 npm
npm run start

```

## 项目结构

```
browserify/
├── src/                   # 源代码目录
│   ├── main.js            # 主 JavaScript 文件
│   └── date-formatter.js  # 日期格式化模块
├── bundle.js              # Browserify 打包后的文件
├── index.html             # 页面入口
├── package.json           # 项目依赖和脚本
└── README.md              # 项目说明
```

## 许可

MIT

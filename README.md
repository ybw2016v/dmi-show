# dmi-show

## 使用cloudflare pages 部署 vue 应用

距离第一次接触`vue`已经过去了很长一段时间，现在再来看`vue`发现已经可以说是面目全非了，基本上都不一样了，比起第一次用`vue`，这次用更加"前端"的方式来重新学一下`vue`。

### 目标

这次对`vue`的再学习，目的是给DMIs的一个[json订阅接口](https://m.dogcraft.top/dogcraft.json)写一个配套的页面，生成一个纯静态的页面，可以直接被Github Pages、Cloudflare Pages或nginx部署。

### 开始

这次是用`vite`来作为前端构建工具，`vite`是`vue`的作者写的，用起来应该比同类的更好用。

安装`vite`

```bash
npm install -g vite
```

使用vite初始化项目(通过yarn)

```bash
yarn create vite
```

按照提示选择vue项目即可

然后会在当前目录下生成一个新的项目，这个项目的目录结构是这样的：

```
tmp/
├── index.html
├── package.json
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── App.vue
│   ├── assets
│   │   └── vue.svg
│   ├── components
│   │   └── HelloWorld.vue
│   ├── main.js
│   └── style.css
└── vite.config.js
```

其中源代码在`src`目录下面，项目根目录的`index.html`是项目的入口文件，`package.json`是项目的配置文件，`README.md`是项目的说明文件，`vite.config.js`是项目的配置文件。

然后就可以写vue代码了。具体的vue可以参见[vue文档](https://staging-cn.vuejs.org/guide/introduction.html)。




(未完成)

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

### 在Cloudflare Pages上部署

首先确认vue代码是否能正确编译出静态文件，如果可以，就可以进行部署了。

按照cloudflare的操作提示，将账号与github或者gitlab上的项目进行关联，这样在存储库上的内容更新后几个自动触发cloudflare pages 的更新与部署。

对于构建命令，如果没有太过复杂的东西可以直接`npm run build`，项目的根目录与构建输出目录`vite.config.js`保持一致即可。

对于单页应用(SPA)，Cloudflare Pages会将404内容自动重定向到项目的入口`index.html`，如果cloudflare pages没有正确识别出这是一个SPA，会逐级寻找`404.html`并返回，所以还可以手动在`index.html`创建一个`404.html`，内容与`index.html`一致，然后在`vite.config.js`里将`404.html`也设置为入口文件，这样万一没能识别出SPA，也会返回`404.html`的内容，利用vite的多入口功能，这样就不影响正常使用了。

一旦设置完成，在对应的分支更新代码后，应该就会触发cloudflare pages的更新与部署了，cloudflare pages会提供一个免费的`*.pages.dev`的域名，同样也可以用自己的域名来部署。

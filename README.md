## 服务器端渲染

```
1.服务器端渲染需要消耗更多的服务器端资源CPU,内存等)
2.客户端渲染可以将静态资源部署到cdn上,实现高并发
3.服务端渲染对SEO更友好
```

### 构建编译与运行环境

```
1.安装babel-node 
    npm install babel-cli -g
    
2.安装编译react需要的组件
    npm install babel-preset-react -S
    npm install babel-preset-env -S
    npm install bable-plugin-transform-decorators-legacy -S
    
3.在package.json中设置运行命令
    cross-env NODE_ENV=test nodemon --exec babel-node src/server.js
    
    cross-nev: 跨平台设置环境变量
    nodemon:   监视文件的改变并重新运行命令
```


### 基本配置
```
{
  "name": "express-ssr",
  "version": "1.0.0",
  "description": "react ssr",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "server": "cross-env NODE_ENV=test nodemon --exec babel-node src/server.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "babel-plugin-transform-decorators-legacy": "^1.3.5",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "express": "^4.17.1",
    "react": "^16.8.6",
    "react-dom": "^16.8.6"
  },
  "devDependencies": {
    "cross-env": "^5.2.0"
  }
}

```

## react 服务器端渲染实现

```
1.react-dom/server包里面有两个方法 renderToString和renderToStaticMarkup
2. renderToString和renderToStaticMarkup作用都是将react Component转化为HTML的字符串
```

### renderToString

```
1.将React Component转化为HTML字符串，生成的HTML的DOM会带有额外属性
2.各个DOM会有data-react-id属性，第一个DOM会有data-checksum属性
```
### renderToStaticMarkup

```
1.同样是将React Componentz转化为HTML字符串，
2.但是生成的HTML的DOM不会有额外的属性，从而节省HTML字符串的大小
```
### react同构

```
客户端与服务器端使用同样的组件。服务器端负责首次渲染。而行为和交互交由客户端进行。
```

```
1.使用脚手架创建工程create-react-app
2.将express和create-react-app项目的配置文件进行结合
3.将create-react-app编译打包后的文件通过express公开出来。
    app.use('/',express.static("build")
```


### ==.babelrc文件配置== 切记

```
{
	"presets": [
		"env",
		"react"
	],
	"plugins":[
		"transform-decorators-legacy"
	]
}
```

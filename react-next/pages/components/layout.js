import Head from 'next/head'
import Link from 'next/link'
// import withRouer from 'next/router'
import Router from 'next/router'

//路由守卫  客户端执行
Router.events.on('routeChangeStart', (url)=>{
	if(url=== '/list'){
		location.href = '/nopermission'
	}
})

export default ({children}) => (
	<div>
		<Head>
			<title>公共头部测试-next教程</title>
		</Head>
		<div>
			<Link href="/" prefetch>主页</Link>|
			<Link href="/list" prefetch>列表页</Link>|
			<Link href="/nestStyle" prefetch>内联样式</Link>|
			<Link href="/films" prefetch>电影详情</Link>|  
		</div>
		{children}
		<footer>
			版权所有,未经允许，也可以分享。
		</footer>
	</div>
)
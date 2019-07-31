
// 1.react-dom/server包里面有两个方法 renderToString和renderToStaticMarkup
// 2. renderToString和renderToStaticMarkup作用都是将react Component转化为HTML的字符串

import express from 'express';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import App from './components/app';

const app = express();

app.get('/',(req,res)=>{
	const arr = [1,2,3,4,555];
	const html = renderToString(<App list={arr} />);
	res.send(html);
})

app.listen(3000,function(){
	console.log('server start')
})
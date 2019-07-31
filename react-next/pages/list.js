import React from 'react'
import '../styles/list.css'
import Layout from './components/layout'
import Router from 'next/router'

class List extends React.Component{

	state = {
		list:["hellow","nice-to-meet-you","I-am-Ok"]
	}
	render(){
		return (
			<Layout>
				<div>
					<ul className="uls">
			          {this.state.list.map((item,index)=>{
			            return <li key={index} onClick={() => Router.push({
			            	pathname: "/detail",
			            	query: {
			            		arg: item
			            	}
			            })}>{item}</li>
			          })}
			        </ul>
				</div>
			</Layout>
		)
	}
}

export default List


  // 第一种方法
  // return <li key={index} onClick={() => Router.push('/detail?arg=' + item )}>{item}</li>

  // 第二种方法
  //{this.state.list.map((item,index)=>{
		// 	            return <li key={index} onClick={() => Router.push({
		// 	            	pathname: "/detail",
		// 	            	query: {
		// 	            		arg: item
		// 	            	}
		// 	            })}>{item}</li>
		// 	          })}
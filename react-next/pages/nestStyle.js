import React from 'react'
import Layout from './components/layout'

class NestStyle extends React.Component{

	render(){
		return (
			<Layout>
				<div>
					<h1>hellow 内联!! </h1>
					<style jsx>{`
						h1 {
							color:orange;
						}
					`}</style>
				</div>
			</Layout>
		)
	}
}

export default NestStyle



import React from 'react'
import axios from 'axios'

export default class Films extends React.Component{

	static async getInitialProps(){
		const res = await axios.get('http://m.maizuo.com/gateway?cityId=330100&pageNum=1&pageSize=10&type=1&k=2341043',{
			headers:{
				'X-Host': 'mall.film-ticket.film.list'  //设置防盗链
			}
		})
		return {
			films: res.data.data.films
		}
	}
	render(){
		return (
			<div>
				<h2>电影</h2>
				<ul>
					{
						this.props.films.map(item => {
							return <li key={item.filmId}>
										{item.name}
										<img src={item.poster} />
								   </li>
						})
					}
				</ul>

			</div>
		)
	}
}
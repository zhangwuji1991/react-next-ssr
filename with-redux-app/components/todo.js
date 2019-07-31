import React from 'react'
import {connect} from 'react-redux'

class Todo extends React.Component{
	render(){
		return (
			<div>
				<div>
					<input type="text" ref="ipt" />
					<button onClick={() => this.props.addTodo(this.refs.ipt.value)
					}>添加</button>
				</div>
				<ul>
		          {this.props.todos.map((item,index)=>{
		            return <li key={index}>{item}</li>
		          })}
		        </ul>
			</div>
		)
	}

}

const mapStoreToProps = (state) => ({
	todos:state.todos
})

const mapDispatchToProps = (dispatch) => ({
	addTodo: (val) => {
		dispatch({
			type: 'ADD_TODO',
			payload: val
		})
	}
})

export default connect(mapStoreToProps,mapDispatchToProps)(Todo)
import React from 'react';
import Todo from '../components/Todo';
import style from './TodoList.css';

class TodoList extends React.Component{
	constructor(props){
		super(props);
	}
	
	get todoItems() {
		return this.props.todoItems.map(todo => <Todo key={todo.id} todo={todo} remove={this.props.removeTodo}/>)
	}
	
	render() {
		return (
			<ul className={style.TodoList}>
				{this.todoItems}
			</ul>
		);
	} 
}

export default TodoList;
import React from 'react';
import style from './TodoForm.css'

const FormFortodo = (props) => (
	<form onSubmit={props.onSubmit} className={style.TodoForm}>
		<label htmlFor={'text'}>Write a task to add</label>
		<input 
			onChange={props.onChange} 
			id={'text'}
			value={props.input}
			/>
		<button type={'submit'} value='submit'>Dodaj</button>
	</form>
);

class TodoForm extends React.Component{
	constructor(props){
		super(props);
		this.state={
			input: ''
		}
	}
	
	handleChange(event) {
		let todoValue = event.target.value;
		this.setState({input: todoValue});
	}
	
	handleSubmit(event) {
		event.preventDefault();
		let value = this.state.input;
		this.props.addTodo(value);
	}
	
	render() {
		return (
			<FormFortodo 
				onChange={this.handleChange.bind(this)} 
				onSubmit={this.handleSubmit.bind(this)} 
				input={this.state.input} 
			/>
		);
	}
}

export default TodoForm;
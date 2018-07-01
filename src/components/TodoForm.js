import React from 'react';
import style from './TodoForm.css'

const FormFortodo = (props) => {
	console.log(props);
	console.log(props.onChange);
	console.log(props.onSubmit);
	return (
		<form onSubmit={props.onSubmit} className={style.TodoForm}>
			<label htmlFor = {'text'}>Write a task to add</label>
			<input 
				onChange={props.onChange} 
				id={'text'}
				value={props.input}
				/>
			<button type={'submit'} value='submit'>Dodaj</button>
		</form>
	);
	
}

class TodoForm extends React.Component{
	constructor(props){
		super(props);
		this.state={
			input: ''
		}
	}
	
	handleChange(event) {
		let todoValue = event.target.value;
		console.log('input value: ' + todoValue);
		this.setState({input: todoValue});
		console.log(this.state.input);
	}
	
	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state.input);
		let value = this.state.input;
		this.props.addTodo(value);
		console.log(this.props.addTodo);
	}
	
	render() {
		return (
			<FormFortodo onChange={this.handleChange.bind(this)} onSubmit={this.handleSubmit.bind(this)} input={this.state.input}></FormFortodo>
		);
	}
}

export default TodoForm;
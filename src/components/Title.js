import React from 'react';
import style from './Title.css';

const Title = (props) => {
	return (
        <div className={style.Title}>
            <h1>{props.title}</h1>
            <p>Number of todo tasks: {props.number}</p>
        </div>
	);	
}

export default Title;
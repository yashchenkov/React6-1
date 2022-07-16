import React, { useState, useEffect } from 'react';
import moment from 'moment';

export default function ClockSetter(props) {
	const [ name, setName ] = useState('');
	const [ timeZone, setTimeZone ] = useState('');
	const { submit } = props;



	return(
		<div className='clockSetter'>
			<form >
				<div className='input-container'>
					<label htmlFor="name">Название</label>
					<input 
					type="text" 
					name='name' 
					value={name}
					onChange={(evt) => {
						setName(evt.target.value);
					}}
					/>
				</div>
				<div>
					<label htmlFor="name">Временная зона</label>
					<input 
					type="number" 
					name='timeZone' 
					value={timeZone}
					onChange={(evt) => {
						setTimeZone(evt.target.value);
					}}
					/>
				</div>
				<button type='submit' onClick={(evt) => {
					evt.preventDefault();
					if(name !== '' && timeZone !== ''){
						submit(name, timeZone);
						setName('');
						setTimeZone('');
					}
				}
				}>Добавить</button>
			</form>
		</div>
	);
}
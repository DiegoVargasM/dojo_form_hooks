import React from "react";
import './form.css';
const Form = props => {
	/* Deestructuring our props */
	const { inputs, setInputs } = props;

	const onChange = e => {
		setInputs({
			/* Grab all */
			...inputs,
			/* Only change one */
			[e.target.name]: e.target.value
		})
	}
	return (
		<div>
		<h1> User Registration</h1>
		<form className="form-element">
			<div className="form-group">
				<label htmlFor="firstName" >First Name:</label>
				<input onChange={onChange} type="text" name="firstName" ></input>
			</div>
			<div className="form-group">
				<label htmlFor="lastName" >Last Name:</label>
				<input onChange={onChange} type="text" name="lastName" ></input>
			</div>	
			<div className="form-group">
				<label htmlFor="email" >Email:</label>
				<input onChange={onChange} type="text" name="email" ></input>
			</div>	
			<div className="form-group">
				<label htmlFor="password" >Password:</label>
				<input onChange={onChange} type="password" name="password" ></input>
			</div>	
			<div className="form-group">
				<label htmlFor="confirmPassword" >Confirm Password:</label>
				<input onChange={onChange} type="password" name="confirmPassword" ></input>
			</div>	
		</form>	
		</div>
			
	)
}

export default Form;
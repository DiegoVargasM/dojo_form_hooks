import React from "react";

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
		<form>
			<label htmlFor="firstName" >First Name:</label>
			<input onChange={onChange} type="text" name="firstName" ></input>
			<label htmlFor="lastName" >Last Name:</label>
			<input onChange={onChange} type="text" name="lastName" ></input>
			<label htmlFor="email" >Email:</label>
			<input onChange={onChange} type="text" name="email" ></input>
			<label htmlFor="password" >Password:</label>
			<input onChange={onChange} type="text" name="password" ></input>
			<label htmlFor="confirmPassword" >Confirm Password:</label>
			<input onChange={onChange} type="text" name="confirmPassword" ></input>
		</form>	
	)
}

export default Form;
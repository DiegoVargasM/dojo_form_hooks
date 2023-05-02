import React from "react";

const Form = props => {
	return (
		<form>
			<label htmlFor="firstName" >First Name:</label>
			<input type="text" name="firstName" ></input>
			<label htmlFor="lastName" >Last Name:</label>
			<input type="text" name="lastName" ></input>
			<label htmlFor="email" >Email:</label>
			<input type="text" name="email" ></input>
			<label htmlFor="password" >Password:</label>
			<input type="text" name="password" ></input>
			<label htmlFor="confirmPassword" >Confirm Password:</label>
			<input type="text" name="confirmPassword" ></input>
		</form>	
	)
}

export default Form;
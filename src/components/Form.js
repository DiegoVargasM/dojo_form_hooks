import React from "react";
import { useState } from "react";
import './form.css';
const Form = props => {
	/* Deestructuring our props */
	const { inputs, setInputs } = props;

	// add submitted state
	const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

	const onChange = e => {
		setInputs({
			/* Grab all */
			...inputs,
			/* Only change one */
			[e.target.name]: e.target.value
		})
	}

	//Define the function called when submitting
	const createUser = (e) => {
        e.preventDefault();
        const newUser = { inputs };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };
	
	//change message according to submit status
	const formMessage = () => {
        if( hasBeenSubmitted ) {
	    return "Thank you for submitting the form!";
	} else {
	    return "Welcome, please submit the form";
	}
	};
	
	return (
		<div>
		<h1> User Registration</h1>
			<h3>{ formMessage()}</h3>
		<form className="form-element" onSubmit={createUser}>
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
			<input type="submit" value="Create User"></input>
		</form>	
		</div>
			
	)
}

export default Form;
import React from "react";
import { useState } from "react";
import './form.css';
const Form = props => {
	/* Deestructuring our props */
	const { inputs, setInputs } = props;

	// add submitted state
	const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
	const [nameError, setNameError] = useState("");
	const [lastNameError, setLastNameError] = useState("");
	const [emailError, setEmailError] = useState("");

	const onChange = e => {
		setInputs({
			/* Grab all */
			...inputs,
			/* Only change one */
			[e.target.name]: e.target.value
		})
		if (e.target.name === "firstName") {
			console.log(e.target.name);
			if (e.target.value.length < 2) {
				setNameError("El primer nombre debe tener al menos 2 caracteres")
			} else {
				setNameError("")
			}
		} else if (e.target.name === "lastName") {
			if (e.target.value.length < 2) {
				setLastNameError("El apellido debe tener al menos 2 caracteres")
			} else {
				setLastNameError("")
			}
		} else if (e.target.name === "email") {
			if (e.target.value.length < 5) {
				setEmailError("El correo electrónico debe tener al menos 5 caracteres")
			} else {
				setEmailError("")
			}
		}
	}

	//Define the function called when submitting
	const createUser = (e) => {
		e.preventDefault();
		const newUser = { inputs };
        console.log(newUser);
        setHasBeenSubmitted( true );
    };
	
	
	return (
		<div>
		<h1> User Registration</h1>
			{
				hasBeenSubmitted ?
				<h3>Thank you for submitting the form!</h3> :
				<h3>Welcome, please submit the form.</h3>
			}
		<form className="form-element" onSubmit={createUser}>
			
			<div className="form-group">
				<label htmlFor="firstName" >First Name:</label>
				<input onChange={onChange} type="text" name="firstName" ></input>
			</div>
			{
            	nameError ?
                <span>{ nameError }</span> :
                ''
            }
			<div className="form-group">
				<label htmlFor="lastName" >Last Name:</label>
				<input onChange={onChange} type="text" name="lastName" ></input>
			</div>
			{
            	lastNameError ?
                <span>{ lastNameError }</span> :
                ''
            }	
			<div className="form-group">
				<label htmlFor="email" >Email:</label>
				<input onChange={onChange} type="text" name="email" ></input>
			</div>
			{
            	emailError ?
                <span>{ emailError }</span> :
                ''
            }	
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
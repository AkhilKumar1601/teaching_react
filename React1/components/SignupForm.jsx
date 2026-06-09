/* Question

Create signup form with:

Name
Email
Password

Validation:

Empty fields not allowed
Password min 6 characters
Concepts
Multiple states
Form handling
Validation */

import {useState} from 'react';

function SignupForm () {

	const [name,setName] = useState('');
	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');

	return (
		<>
		<h1> Signup Form </h1>
		<div>Name:</div>
		<input value={name} placeholder="Enter your Name" onChange={(e) => setName(e.target.value)}/>
		<div>Email:</div>
		<input value={email} placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)}/>
		<div>Password:</div>
		<input value={password} placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} type="password"/>
		<button onClick={() => alert(`your form is submitted`)}>Submit</button>
		</>
	)
}

export default SignupForm;

/* Question

Create a password input with:

Show Password button
Hide Password button
Concepts
Input state
Toggling UI state */

import { useState } from 'react';

function PasswordToggle () {

	const [ showPassword, setShowPassword ] = useState(0);

	return (
		<>
		<h1> Password Toggle </h1>
		<input type={showPassword ? "text" : "password"} placeholder="Enter your password"/>
                <button onClick = {() => setShowPassword(!showPassword)}> {showPassword ? "Hide" : "Show"} Password</button>
		</>
	)
}

export default PasswordToggle;

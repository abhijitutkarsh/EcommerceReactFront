import React from "react";
import HeaderHome from "../Partials/HeaderHome";
// import {Navigate} from 'react-router-dom'
import { Link } from "react-router-dom";

import './signUp.css'




function SignUp(props){
	
	// const [firstName, setFirstName] = useState('');
	// const [lastName, setLastName ] = useState('');
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');
	
	function registerUser(e){
		e.preventDefault();
		// console.log(e.target[0].value)
		var data = {
			firstname: e.target[0].value,
			lastname: e.target[1].value,
			email: e.target[2].value,
			password:e.target[3].value 
		  }
		//   console.log(data)
		  fetch('https://ecommercenode-8uip.onrender.com/signup', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
			  'Content-type': 'application/json; charset=UTF-8',
			},
		  })
			 .then((response) => response.json())
			 .then((data) => {
		// window.location.href='/login';
		console.log(data)
				
								 })
			 .catch((err) => {
				console.log(err);
			 });
	}
	

    return (
		<>
        {/* <br> */}
        {/* </br> */}
        {/* <br></br> */}
        <div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login" onSubmit={registerUser}>
			<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input"  placeholder="First Name" name="firstName" />
					<input type="text" className="login__input" placeholder="Last Name" name="lastName" />
					<input type="text" className="login__input" placeholder="Email" name="email"/>
					<input type="password" className="login__input" placeholder="Password" name="password" autoComplete="on"/>
				</div>
			
				<button className="button login__submit" type="submit">
					<span className="button__text">Register Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div className="social-login">
				{/* <h3>log in via</h3> */}
				<div className="social-icons">
					{/* <a href="/" class="social-login__icon fab fa-instagram"></a>
					<a href="/" class="social-login__icon fab fa-facebook"></a>
					<a href="/" class="social-login__icon fab fa-twitter"></a> */}
					<Link to='/login'><b>Login Now</b></Link>
				</div>
			</div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
</>

    )
}

export default SignUp;
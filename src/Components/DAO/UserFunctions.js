import axios from 'axios';

export const register = newUser =>{
	return axios
	.post('/signup',{
		firstName:newUser.firstName,
		lastName:newUser.lastName,
		email:newUser.email,
		password:newUser.password
	})
	.then(res=>{
		console.log("Registered");
	})
}

export const login = userlogin =>{
	return axios
	.post('/signin',{
		email:userlogin.email,
		password:userlogin.password
	})
	.then(res=>{
		console.log("Logged In");
	})
}

export const verifyUser = verify =>{
	return axios
	.post('/verification',{
		token:verify.token,
	})
	.then(res=>{
		console.log("User verified");
	})
}
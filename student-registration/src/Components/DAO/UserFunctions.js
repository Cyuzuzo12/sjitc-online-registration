import axios from 'axios';

export const register = newUser =>{
	return axios
	.post('/signup',{
		firstName:newUser.firstName,
		lastName:newUser.lastName,
		email:newUser.email,
		password:newUser.password,
		role:newUser.role
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
export const diplomaReg = newUser =>{
	return axios
	.post('/',{
		firstName:newUser.firstname,
		lastName:newUser.lastname,
		bankSlip:newUser.bankslip,
		dob:newUser.dob,
		ubudehe:newUser.ubudehe,
		gender:newUser.gender,
		completionYear:newUser.completionYear,
		father:newUser.father,
		mother:newUser.mother,
		department:newUser.department,
		email:newUser.email,
		guardian:newUser.guardian,
		nationalID:newUser.nationalID,
		insurance:newUser.insurance,
		sponsor:newUser.sponsor,
		program:newUser.program,
		yearAdmittedIn:newUser.yearAdmittedIn,
		healthState:newUser.healthState,
		schoolFeesSponsor:newUser.schoolFeesSponsor,
		subject:newUser.subject,
		previousSchool:newUser.previousSchool,
		nationality:newUser.nationality
	})
	.then(res=>{
		console.log("Successful!!!!");
	})
}

export const advancedLevelReg = newUser =>{
	return axios
	.post('/',{
		firstName:newUser.firstname,
		lastName:newUser.lastname,
		bankSlip:newUser.bankslip,
		dob:newUser.dob,
		ubudehe:newUser.ubudehe,
		gender:newUser.gender,
		completionYear:newUser.completionYear,
		father:newUser.father,
		mother:newUser.mother,
		option:newUser.option,
		email:newUser.email,
		guardian:newUser.guardian,
		nationalID:newUser.nationalID,
		insurance:newUser.insurance,
		sponsor:newUser.sponsor,
		grade:newUser.grade,
		yearAdmittedIn:newUser.yearAdmittedIn,
		healthState:newUser.healthState,
		schoolFeesSponsor:newUser.schoolFeesSponsor,
		subject:newUser.subject,
		attendedSchool:newUser.attendedSchool,
		parentContact:newUser.parentContact,
		results:newUser.results
	})
	.then(res=>{
		console.log("Success!!!!");
	})
}
export const admitted = (id)=>{
	// return axios
	// .post('/admitted/'+id.stId)
	console.log(id.stId)
}
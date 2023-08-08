import axios from 'axios'

export const signUP = (email: string, password: string) => {
	try {
		axios
			.post('https://zero7-08.onrender.com/registration', {
				email,
				password,
			})
			.then((response) => console.log(response))
	} catch (error) {
		console.log(error)
	}
}

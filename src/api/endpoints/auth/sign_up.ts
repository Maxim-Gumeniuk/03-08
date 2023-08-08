import { Auth } from '@/api/types/enum/endpoints/auth'
import axios from 'axios'

export const signUP = (email: string, password: string) => {
	try {
		axios
			.post(Auth.registration, {
				email,
				password,
			})
			.then((response) => console.log(response))
	} catch (error) {
		console.log(error)
	}
}

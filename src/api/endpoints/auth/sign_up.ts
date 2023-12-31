import api from '@/api/axios_setup'
import { Auth } from '@/api/types/enum/endpoints/auth'

export const signUP = (email: string, password: string) => {
	try {
		api.post(Auth.registration, {
			email,
			password,
		}).then((response) => response.data)
	} catch (error) {
		console.log(error)
	}
}

import axios from 'axios'
const { BASE_BACK_URL } = process.env

const api = axios.create({
	baseURL: BASE_BACK_URL,
})

export default api

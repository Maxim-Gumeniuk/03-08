import axios from 'axios'
const { BASE_BACK_URL } = process.env

const api = axios.create({
	baseURL: 'http://localhost:5010',
})

export default api

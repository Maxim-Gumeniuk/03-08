import axios from 'axios'
const { BASE_BACK_URL } = process.env

axios.defaults.baseURL = BASE_BACK_URL

import axios from 'axios'

const api_domain = 'https://dummyjson.com'

const api = axios.create({
  baseURL: api_domain,
})

export default api

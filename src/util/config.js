import axios from 'axios'


let basePath = process.env.NODE_ENV == 'development'? '/api': '/'
var instance = axios.create({
  baseURL: basePath,
  timeout: 5000
})

export default instance;

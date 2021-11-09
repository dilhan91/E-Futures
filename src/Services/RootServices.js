import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});


/**
 * interceptor to catch all errors
 * @param error 
 */
const errorInterceptor = error => {
    if(error.response && error.response.status) {
        console.log(error, error.message);
      } else {
        console.log(error.message)
      }

    alert('System Error. Try again in few minutes');
    return Promise.reject(error);
}


/**
 * interceptor for responses
 * @param response 
 */
const responseInterceptor = response => {
    switch(response.status) {
        case 200: 
            break;
        default:
    }
    return response;
}

axiosInstance.interceptors.response.use(responseInterceptor, errorInterceptor);
export default axiosInstance;
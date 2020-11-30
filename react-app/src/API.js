import axios from 'axios'

let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

if (localStorage.getItem('deluxeToken')) headers.Authorization = 'Bearer ' + localStorage.getItem('deluxeToken');

let API = axios.create({
    baseURL: process.env.REACT_APP_API_URL + "/api",
    timeout: 60000,
    headers: headers
});

API.interceptors.request.use(
    request => requestHandler(request));

API.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
);

const errorHandler = error => {
    console.log(error.response)
    // if (error.response === undefined || error.response.status === 403) {
    //     forceLogout();
    //     return Promise.reject({...error})
    // } else {
    //     return error
    // }
};

const successHandler = response => {
    console.log(response)
    return response
};


const requestHandler = request => {
    console.log(request)
    return request
};

export function forceLogout() {
    localStorage.clear();
    window.location = '/';
}


export default API

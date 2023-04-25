import axios from "axios";


const base_url = 'http://127.0.0.1:8000'
const config = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

export const getRecogizedData = () => {
    // return axios.get(`${base_url}/api/image/?from=${from}&to=${to}`);
    return axios.get('http://127.0.0.1:8000/api/image/')
}

export const getFilteredRecogizedData = (from,to) => {
    console.log('inaide')
    return axios.get(`${base_url}/api/image/?from=${from}&to=${to}`);
}
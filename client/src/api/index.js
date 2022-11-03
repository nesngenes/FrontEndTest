import axios from 'axios';

const API = axios.create({baseURL: '/albatech/'});

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
})


// AUTH

export const signIn = (formData) => API.post(`auth/signin`, formData);
export const signUp = (formData) => API.post(`auth/signup`, formData);

// FETCH DATA FROM EXTERNAL API

export const fetchDatasFromAPI = () => API.get(`mypage`);


import axios from 'axios';

const apiUserRandom = axios.create({
    baseURL: 'https://randomuser.me'
})

export default apiUserRandom;
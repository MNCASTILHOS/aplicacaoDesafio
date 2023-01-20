import axios from 'axios';

const apiDogRandom = axios.create({
    baseURL: 'https://random.dog'
})

export default apiDogRandom;
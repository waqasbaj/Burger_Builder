import axios from 'axios'

const instance = axios.create({

    baseURL : 'https://react-burger-app-3de2b.firebaseio.com/'
})

export default instance
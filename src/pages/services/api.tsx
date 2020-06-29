import axios from 'axios'

const Api = axios.create({
    baseURL: 'https://arvore-societaria-api.herokuapp.com/'
})

export default Api

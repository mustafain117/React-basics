import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID AEjgp3xlqfNVW2vgbKH2O292e6LwPX2_7uFQDUQfdng'
    }
})
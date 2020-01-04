import axios from 'axios'
const baseUrl = 'http://localhost:8000'

export const sendMsg = async (msg) => {
    const res = await axios.post(`${baseUrl}/newMsg`, msg)
    return res.data
}
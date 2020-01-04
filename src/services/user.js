import socketIOClient from "socket.io-client"
import axios from 'axios'

const baseUrl = 'http://localhost:8000'
//const socket = socketIOClient(baseUrl)

export const loginUser =  async (user) => {
    const res = await axios.post(`${baseUrl}/login`, user)
    return res.data
}

export const getOnlineUsers = async () => {
    const res = await axios.get(`${baseUrl}/onlineUsers`)
    return res.data
}
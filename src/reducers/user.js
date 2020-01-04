import socketIOClient from "socket.io-client"
import { loginUser } from '../services/user'
const io = socketIOClient('http://localhost:8000')


const reducer = (state = null, action) => {
    switch(action.type) {
        case 'INIT_USER':
            return action.data
        case 'LOGOUT':
            return action.data
        default:
            return state
        
    }
}

export const initUser = (user) => {

    return async (dispatch) => {
        const loggedUser = await loginUser(user)
        
        dispatch({
            type: 'INIT_USER',
            data: loggedUser
        })
    }
}

export const logout = () => {

    io.emit('logout')
    return {
        type: 'LOGOUT',
        data: null
    }
}

export default reducer
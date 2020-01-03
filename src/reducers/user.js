
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
    return {
        type: 'INIT_USER',
        data: user
    }
}

export const logout = () => {

    window.sessionStorage.removeItem('user')
    
    return {
        type: 'LOGOUT',
        data: null
    }
}

export default reducer
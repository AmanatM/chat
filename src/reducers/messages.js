import { sendMsg } from '../services/messages'


const reducer = (state = [], action) => {
    switch(action.type) {
        case 'NEW_MSG':
            return [ ...state, action.data]
        default:
            return state
    }
}

export const new_msg = (msg) => {

    return async (dispatch) => {

        const dataMsg = await sendMsg(msg)

        dispatch({
            type: 'NEW_MSG',
            data: dataMsg
        })
    }

}

export const recieve_msg = (msg) => {
    
    return {
        type: 'NEW_MSG',
        data: msg
    }
}

export default reducer
let defaultStore = [
    {msg: 'Hello', from: 'Amanat'}, {msg: 'Hi there', from: 'Unme'},
    {msg: 'Hello', from: 'Amanat'}, {msg: 'Hi there', from: 'Note'},
    {msg: 'Hello', from: 'Amanat'}, {msg: 'Hi there', from: 'Earphone'},
    {msg: 'Hello', from: 'Amanat'}, {msg: 'Hi there', from: 'Frank'},
    {msg: 'Hello', from: 'Amanat'}, {msg: 'Hi there', from: 'Ball'},
    {msg: 'Hello', from: 'Amanat'}, {msg: 'Hi there', from: 'Lemon'},
    {msg: 'Hello', from: 'Amanat'}, {msg: 'Hi there', from: 'Rock'},
    {msg: 'Hello', from: 'Amanat'}, {msg: 'Hi there', from: 'Lemon'},
    {msg: 'Hello', from: 'Amanat'}, {msg: 'Hi there', from: 'User'},
    {msg: 'Hello', from: 'Amanat'}, {msg: 'Hi there', from: 'Looser'},
]

const reducer = (state = defaultStore, action) => {
    switch(action.type) {
        case 'NEW_MSG':
            return [ ...state, action.data]
        default:
            return state
    }
}

export const new_msg = (msg) => {
    return {
        type: 'NEW_MSG',
        data: msg
    }
}

export default reducer
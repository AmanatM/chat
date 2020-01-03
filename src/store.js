import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
//import thunk from 'redux-thunk'


import messageReducer from './reducers/messages'
import userReducer from './reducers/user'

const reduce_all = combineReducers({
    user: userReducer,
    msgs: messageReducer
})

const store = createStore(reduce_all, composeWithDevTools())

export default store
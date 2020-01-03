import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyle from './GlobalStyled'
import * as serviceWorker from './serviceWorker'
import store from './store'
import { Provider } from 'react-redux'

const render = () => {
    ReactDOM.render(
            <Provider store={store}>
                <GlobalStyle/>
                <App/>
            </Provider>,
        document.getElementById('root')
    )
}

render()
store.subscribe(render)


serviceWorker.unregister()

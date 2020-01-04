import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch, withRouter, Redirect } from 'react-router-dom'

import styled from 'styled-components'
import ChatPage from './pages/ChatPage'
import LoginPage from './pages/LoginPage'
import { connect } from 'react-redux'
import socketIOClient from "socket.io-client"

const AppStyled = styled.div`
  height: 100vh;
  max-height: 100vh;
  padding-bottom: 50px;
`

// const NotFound = () => (
//   <>
//     <h1>Page not found</h1>
//     <Link to="/">Go home</Link>
//   </>
// )


const App = ({user}) => {

  return (
    <AppStyled className="App">

        {!user ? (
           <LoginPage/>
          ) : <ChatPage/>}

    </AppStyled>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps, null)(App)

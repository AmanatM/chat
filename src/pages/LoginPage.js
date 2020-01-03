import React, { useState } from 'react'
import styled from 'styled-components'
import { TextField, DialogTitle, Dialog, List, ListItem, Avatar, Typography, Button } from '@material-ui/core'
import { initUser } from '../reducers/user'
import { connect } from 'react-redux'



const LoginPageStyled = styled.div`

    h4 {
        margin-bottom: 20px;
        text-align: center;
        padding: 20px 0;
    }

    form {
        width: 90%;
        padding-top: 30px;
        max-width: 450px;
        margin: 0 auto;
        text-align: center;
        display: flex;
        flex-direction: column;

        button {
            margin-top: 20px;
        }
    }
`

const LoginPage = ({initUser}) => {

    const [ username, setUsername ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        initUser({
            username
        })
    }

    return (
        <LoginPageStyled>
            <Typography variant="h4">Enter username</Typography>
            <form onSubmit={handleSubmit}>
                <TextField value={username} onChange={(e) => setUsername(e.target.value)} id="filled-basic" label="Filled" variant="filled" />
                <Button variant="contained" color="primary">Submit</Button>
            </form>
        </LoginPageStyled>
    )
}

export default connect(null, { initUser })(LoginPage)
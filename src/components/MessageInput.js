import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { new_msg } from '../reducers/messages'

import { TextField, Fab } from '@material-ui/core'
import { Send } from '@material-ui/icons';

const MessageInputStyled = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: white;

    form {
        display: flex;
        align-items: center;
        padding: 10px;

        .message_area {
            margin-right: 10px;
            width: 100%;
        }

        .send_btn {
            min-width: 48px;
            min-height: 48px;
        }
    }

`

const MessageInput = ({new_msg, user}) => {

    const [ msg, setMsg ] = useState('')
    const [ err, setErr] = useState(false)
    
    const inputRef = useRef(null)

    const handleSendMsg = (e) => {
        e.preventDefault()
        if(msg !== '' && msg !== ' ') {
            new_msg({
                msg,
                from: user.username
            })
            setMsg('')
        } else {
            setErr(true)
        }
    }

    const handlesendBtn = (e) => {
        if(e.target!==e.currentTarget) e.currentTarget.click()
    }

    return (
        <MessageInputStyled>
                <form onSubmit={handleSendMsg} noValidate autoComplete="off">
                    <TextField ref={inputRef} id="input"  onBlur={() => setErr(false)} error={err} value={msg} onChange={(e) => {setMsg(e.target.value); setErr(false) }} className="message_area" label="Input message" variant="outlined" />
                    <label onClick={handlesendBtn} htmlFor="input">
                        <Fab type="submit" className="send_btn" size="medium" color="primary"><Send/></Fab>
                    </label>
                </form>
        </MessageInputStyled>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {new_msg})(MessageInput)
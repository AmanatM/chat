import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Chip, Avatar } from '@material-ui/core'
import { recieve_msg } from '../reducers/messages'
import socketIOClient from 'socket.io-client'
const io = socketIOClient('http://localhost:8000')

const MessageAreaStyled = styled.div`
    padding-bottom: 80px;
    padding-top: 80px;

    .msg {
        padding: 5px 10px;
        display: flex;


        &.myMsg {
            justify-content: flex-end;

            .chip {
                background-color: #efefef;
            }
        }
    }
`

const MessageArea = (props) => {

    const loggedUser = props.user.username
    const messagesEndRef = useRef(null)


    useEffect(() => {
        messagesEndRef.current.scrollIntoView()
    }, [props.msgs])

    useEffect(() => {
        io.on('new msg', (msg) => {
            console.log(msg)
            props.recieve_msg(msg)
        })
    }, [])

    return (
        
        <MessageAreaStyled> 
                {props.msgs ? (
                    props.msgs.map((item, index) => (
                        <div className={`msg ${ loggedUser ? (item.from === loggedUser ? 'myMsg' : '') : null}`} key={index} >
                            <Chip className="chip" label={item.msg} avatar={item.from !== loggedUser ? <Avatar>{item.from.charAt(0)}</Avatar> : null} />
                        </div>
                    ))
                 ) : null}
                
            <div ref={messagesEndRef} />
        </MessageAreaStyled>
    )
}

const mapStateToProps = (state) => {

    return {
        msgs: state.msgs,
        user: state.user
    }
}

export default connect(mapStateToProps, {recieve_msg})(MessageArea)
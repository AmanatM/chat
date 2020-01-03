import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Chip, Avatar } from '@material-ui/core'
import { new_msg } from '../reducers/messages'

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
    

    const test = () => {
        props.new_msg({msg: 'New message' + props.msgs.length, from: 'Lemon'})
    }


    useEffect(() => {
        messagesEndRef.current.scrollIntoView()
    }, [props.msgs])



    return (
        
        <MessageAreaStyled onClick={test}> 
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

export default connect(mapStateToProps, {new_msg})(MessageArea)
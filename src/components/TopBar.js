import React, { useState } from 'react'
import { AppBar, Button, Toolbar, Menu, MenuItem, Avatar, Typography, IconButton } from '@material-ui/core'
import styled from 'styled-components'
import ForumIcon from '@material-ui/icons/Forum'
import { connect } from 'react-redux'
import { logout } from '../reducers/user'


const AppBarStyled = styled(AppBar)`
    .toolbar {
        display: flex;
        align-items: center;
    }

    .nav_btn {
        margin-right: 15px;
    }

    .title {
        margin-right: auto;
    }

    .avatar {
        margin-right: 10px;
    }
`


const TopBar = ({user, logout}) => {

    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = e => {
        setAnchorEl(e.currentTarget)
    }
    
    const handleClose = () => {
        setAnchorEl(null)
    }

    let username = user.username

    return (
        <AppBarStyled position="fixed">
            <Toolbar className="toolbar">
                <IconButton color="inherit" size="small" className="nav_btn"><ForumIcon/></IconButton>
                <Typography className="title">Online users: 2</Typography>
                <Button onClick={handleClick} color="inherit"><Avatar size="medium" className="avatar">{ username ? username.charAt(0) : null}</Avatar>{user.username}</Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Do something</MenuItem>
                    <MenuItem onClick={() => {logout()}}>Log out</MenuItem>
                </Menu>
            </Toolbar>
        </AppBarStyled>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {logout})(TopBar)
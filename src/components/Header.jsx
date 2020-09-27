import React from 'react'
import cn from './Header.module.scss'

export const Header = (props) => {
    return (
        <header className={cn.header}>
            <span>Hushdev-Chat-room</span>
            <SignOut auth={props.auth} />
        </header >
    )
}

const SignOut = (props) => {
    return props.auth.currentUser && (
        <button onClick={() => props.auth.signOut()}>Sign Out</button>
    )
}
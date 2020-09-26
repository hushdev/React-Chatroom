import React from 'react'
import cn from './Header.module.scss'

export class Header extends React.Component {
    render() {
        let isAuthorised = true

        let button = isAuthorised
            ? <button className={cn.sign_out}>Sign out</button>
            : <button className={cn.sign_in}>Sign In</button>

        return (
            <header className={cn.header}>
                <span>Chat-room</span>
                {button}
            </header >
        )
    }
}
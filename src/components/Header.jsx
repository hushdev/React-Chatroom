import React from 'react'
import cn from './Header.module.scss'

export const Header = (props) => {
    return (
        <header className={cn.header}>
            <span>Chat-room</span>
            {/* <button onClick={props.signOut()}>Sign Out</button> */}
        </header >
    )
}
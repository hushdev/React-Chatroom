import React from 'react'
import cn from './SignIn.module.scss'

export const SignIn = (props) => {

    const signInWithGoogle = () => {
        const provider = props.provider
        props.auth.signInWithPopup(provider)
    }

    return (
        <button onClick={signInWithGoogle} className={cn.signIn}>Sign In with google</button>
    )
}
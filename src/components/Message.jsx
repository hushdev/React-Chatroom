import React from 'react'
import cn from './Message.module.scss'

export const Message = (props) => {
    const { text, uid, displayName, photoURL } = props.message
    const { currentUid } = props

    let messageType = uid === currentUid ? 'outgoing' : 'incoming'

    let userImg = uid !== currentUid
        ? <img src={photoURL} alt="" />
        : null

    let userName = uid !== currentUid
        ? <p className={cn.msg_user}>{displayName}</p>
        : null


    return (
        <div className={`${cn.msg} ${messageType}`}>
            {userImg}
            <div className={cn.msg_wrap}>
                {userName}
                <p className={cn.msg_text}>{text}</p>
                {/* <p>{calculatedCreatedAt}</p> */}
            </div>
        </div>
    )
}


import React from 'react'
import cn from './Message.module.scss'

export const Message = (props) => {
    let messageType = props.incoming ? 'incoming' : 'outgoing'

    let userImg = props.incoming
        ? <img src={props.photo} alt="" />
        : null



    return (
        <div className={`${cn.msg} ${messageType}`}>
            {userImg}
            <div className={cn.msg_wrap}>
                <p className={cn.msg_user}>{props.name}</p>
                <p className={cn.msg_text}>{props.message}</p>
                <p className={cn.msg_time}>{props.time}</p>
            </div>
        </div>
    )

}


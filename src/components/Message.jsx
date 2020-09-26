import React from 'react'
import cn from './Message.module.scss'
import userIcon from './user_icon.svg'

export class Message extends React.Component {
    render() {
        let messageType = this.props.incoming ? 'incoming' : 'outgoing'

        let userImg = this.props.incoming
            ? <img src={userIcon} />
            : null

        let userName = this.props.incoming
            ? <p className={cn.msg_user}>Andrew</p>
            : null

        return (
            <div className={`${cn.msg} ${messageType}`}>
                {userImg}
                <div className={cn.msg_wrap}>
                    {userName}
                    <p className={cn.msg_text}>{this.props.text}</p>
                    <p className={cn.msg_time}>21:03</p>
                </div>
            </div>
        )
    }
}


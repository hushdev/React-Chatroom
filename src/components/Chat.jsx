import React from 'react'
import cn from './Chat.module.scss'
import { Message } from './Message'

export class Chat extends React.Component {
    render() {
        return (
            <div className={cn.chatroom}>
                <Message incoming={true} text="lorem ipsum dolor sit amet"/>
                <Message incoming={true} text="lorem ipsum dolor sit amet"/>
                <Message incoming={true} text="lorem ipsum dolor sit amet"/>
                <Message incoming={true} text="lorem ipsum dolor sit amet"/>
                <Message incoming={true} text="lorem ipsum dolor sit amet"/>
                <Message incoming={true} text="lorem ipsum dolor sit amet"/>

                <Message incoming={false} text="lorem ipsum dolor sit amet"/>
                <Message incoming={false} text="lorem ipsum dolor sit amet"/>
                <Message incoming={false} text="lorem ipsum dolor sit amet"/>
                <Message incoming={false} text="lorem ipsum dolor sit amet"/>
                <Message incoming={false} text="lorem ipsum dolor sit amet"/>
                <Message incoming={false} text="lorem ipsum dolor sit amet"/>
                <Message incoming={false} text="lorem ipsum dolor sit amet"/>

                <Message incoming={true} text="lorem ipsum dolor sit amet"/>

            </div>
        )
    }
}
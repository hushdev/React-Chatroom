import React, { useRef, useState } from 'react'
import cn from './Chat.module.scss'
import { Message } from './Message'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import sendIcon from './send.svg'

export const Chat = (props) => {
    const dummy = useRef();
    const messagesRef = props.firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt')

    const [messages] = useCollectionData(query, { idField: 'id' });

    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();

        if (formValue && !formValue.trim() == "" && !formValue.trim == " ") {
            const { uid, photoURL, displayName } = props.auth.currentUser;

            await messagesRef.add({
                text: formValue,
                createdAt: props.firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                photoURL,
                displayName
            })

            setFormValue('');
            dummy.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
            <div className={cn.chatroom}>

                {messages && messages.map(msg => {
                    return <Message key={msg.id}
                        message={msg}
                        currentUid={props.auth.currentUser.uid}
                    />
                })}

                <span ref={dummy}></span>

            </div>
            <form className={cn.input_form}>
                <input type="text" placeholder="Message..." value={formValue} onChange={e => setFormValue(e.target.value)} />
                <button onClick={sendMessage}>
                    <img src={sendIcon} alt="" />
                </button>
            </form>
        </>
    )
}
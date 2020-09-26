import React from 'react'
import cn from './Input.module.scss'
import sendIcon from './send.svg'

export class Input extends React.Component {
    render() {
        return (
            <div className={cn.input}>
                <input type="text" placeholder="Message..."/>
                <button>
                    <img src={sendIcon} alt=""/>
                </button>
            </div>
        )
    }
}
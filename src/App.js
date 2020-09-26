import React from 'react';
import './App.scss';

import { Chat } from './components/Chat';
import { Header } from './components/Header';
import { Input } from './components/Input';

export class App extends React.Component {
  render() {
    return (
      <div className="chat">
        <Header />
        <Chat />
        <Input />
      </div>
    )
  }
}

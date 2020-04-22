import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import WhosOnline from './component/WhosOnline';
import Chat from './component/Chat';
import UserProfile from './component/UserProfile';
import Footer from './component/Footer';
import Homepage from './component/Homepage';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

class App extends Component {
  state = {
    room: '',
    user: {
      user_id: 1,
      user_name: 'Michael Smith',
      user_img: 'random url',
    },
  };
  render() {
    const { room, user } = this.state;
    if (room === '') {
      return <Homepage room={room} changeRoom={this.changeRoom} />;
    }
    return (
      <div className="App">
        <Header />
        <UserProfile user={user} />
        <WhosOnline />
        <Chat room={room} user={user} />
        <Footer />
      </div>
    );
  }

  changeRoom = (roomName) => {
    this.setState({ room: roomName });
  };
}

export default App;

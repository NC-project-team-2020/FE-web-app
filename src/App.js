import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import WhosOnline from './component/WhosOnline';
import Chat from './component/Chat';
import Footer from './component/Footer';
import Homepage from './component/Homepage';

class App extends Component {
  state = {
    room: '',
  };
  render() {
    const { room } = this.state;
    if (room === '') {
      return <Homepage room={room} changeRoom={this.changeRoom} />;
    }
    return (
      <div className="App">
        <Header />
        <WhosOnline />
        <Chat />
        <Footer />
      </div>
    );
  }

  changeRoom = (roomName) => {
    this.setState({ room: roomName });
  };
}

export default App;

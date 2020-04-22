import React, { Component } from 'react';

class Homepage extends Component {
  state = {
    rooms: ['Music', 'Sport', 'Baking', 'Coding', 'Politics', 'Art'],
  };
  render() {
    const { changeRoom } = this.props;
    const { rooms } = this.state;
    return (
      <>
        <h1>Select your room</h1>
        <ul>
          {rooms.map((room, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  changeRoom(room);
                }}
              >
                {room}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Homepage;

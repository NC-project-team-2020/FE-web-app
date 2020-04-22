import React, { Component } from 'react';

class Homepage extends Component {
  render() {
    const { changeRoom } = this.props;
    return (
      <>
        <h1>Select your room</h1>
        <ul>
          <li
            onClick={() => {
              changeRoom('Room1');
            }}
          >
            Room 1
          </li>
          <li
            onClick={() => {
              changeRoom('Room2');
            }}
          >
            Room 2
          </li>
          <li
            onClick={() => {
              changeRoom('Room3');
            }}
          >
            Room 3
          </li>
          <li
            onClick={() => {
              changeRoom('Room4');
            }}
          >
            Room 4
          </li>
        </ul>
      </>
    );
  }
}

export default Homepage;

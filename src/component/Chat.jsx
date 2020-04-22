import React, { Component } from 'react';
import WriteMessage from './WriteMessage';

class Chat extends Component {
  message_id;
  message_text;
  user_id;
  room_id;
  created_at;

  state = {
    messages: [
      {
        message_text: 'Hi',
        user_id: 1,
        name: 'Michael Smith',
        created_at: new Date(),
      },
      {
        message_text: 'Second message :)',
        user_id: 2,
        name: 'Hannes Tagerud',
        created_at: new Date(),
      },
      {
        message_text: 'Thirs message',
        user_id: 1,
        name: 'Michael Smith',
        created_at: new Date(),
      },
      {
        message_text: 'Fourth message',
        user_id: 2,
        name: 'Hannes Tagerud',
        created_at: new Date(),
      },
      {
        message_text: 'Hello there, anybody here?',
        user_id: 1,
        name: 'Michael Smith',
        created_at: new Date(),
      },
    ],
  };

  render() {
    console.log(this.state);
    const { messages } = this.state;
    const { room, user } = this.props;
    return (
      <div className='chatBox'>
        <h1>You are now chatting in {room}</h1>
        <ul className='overflowYScroll'>
          {messages.map((message, i) => {
            let userComment;
            if (message.user_id === user.user_id) userComment = 'rightUser';
            else userComment = 'leftUser';
            return (
              <li className={userComment} key={i}>
                <p>{message.message_text}</p>
                <small>
                  {message.name}
                  {','}
                  {message.created_at
                    .toString()
                    .substr(0, 10)
                    .replace(/-/g, ' ')}
                </small>
              </li>
            );
          })}
        </ul>
        <WriteMessage
          messages={messages}
          addCommentToState={this.addCommentToState}
          user={user}
        />
      </div>
    );
  }
  addCommentToState = (data) => {
    this.setState((currentState) => {
      const { message } = data;
      return { messages: [...currentState.messages, message] };
    });
  };
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.messages !== this.state.messages) {
  //   }
  // }
}

export default Chat;

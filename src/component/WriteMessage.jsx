import React, { Component } from 'react';

class WriteMessage extends Component {
  state = {
    comment: '',
  };

  render() {
    return (
      <div>
        <form onSubmit={this.commentSubmit}>
          <label>Comment</label>
          <textarea
            id='comment'
            name='subject'
            placeholder='....'
            onChange={this.handleCommentChange}
            required
          ></textarea>
          <input type='submit' value='Submit'></input>
        </form>
      </div>
    );
  }
  handleCommentChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    this.setState({ comment: value });
  };
  commentSubmit = (event) => {
    const { addCommentToState, user } = this.props;
    const { comment } = this.state;
    event.preventDefault();
    addCommentToState({
      message: {
        user_id: user.user_id,
        name: user.name,
        message_text: comment,
        created_at: new Date(),
      },
    });
    event.target.reset();
  };
}

export default WriteMessage;

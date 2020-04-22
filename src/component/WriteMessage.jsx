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
}

export default WriteMessage;

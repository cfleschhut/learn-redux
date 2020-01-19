import React, { Component } from 'react';

export default class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      comment: ''
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { postId } = this.props.params;
    const { author, comment } = this.state;

    this.props.addComment(postId, author, comment);
  }

  render() {
    const { postComments } = this.props;

    return (
      <div className="comments">
        {postComments.map((comment, i) => (
          <div className="comment" key={i}>
            <p>
              <strong>{comment.user}</strong>
              {comment.text}
              <button className="remove-comment">&times;</button>
            </p>
          </div>
        ))}

        <form onSubmit={e => this.handleSubmit(e)} className="comment-form">
          <input
            type="text"
            name="author"
            value={this.state.author}
            onChange={e => this.handleChange(e)}
            placeholder="author"
          />
          <input
            type="text"
            name="comment"
            value={this.state.comment}
            onChange={e => this.handleChange(e)}
            placeholder="comment"
          />

          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

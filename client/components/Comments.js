import React, { Component } from 'react';

class Comments extends Component {

  handleSubmit (e) {
    e.preventDefault();
    const { postId, addComment } = this.props;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    
    addComment(postId, author, comment);

    /*
     * reset form after submission
     */
    this.refs.commentForm.reset();
  }

  render () {
    const { postId, postComments, removeComment } = this.props;
    return (
      <div className="comments">
        {postComments.map((comment, index) => { 
          return (
            <div className="comment" key={index}>
              <strong>{comment.user}</strong>
              {comment.text}
              <button 
                onClick={removeComment.bind(null, postId, index)}
                className="remove-comment">&times;</button>
            </div>
          ); 
        })}

        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
};

export default Comments;

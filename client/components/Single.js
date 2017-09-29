import React, { Component } from 'react';
import { Link } from 'react-router';
import Photo from './Photo';
import Comments from './Comments';

export default class Single extends Component {
  render () {
    const { 
      params, 
      posts, 
      increment, 
      comments, 
      addComment,
      removeComment
    } = this.props;

    const { postId } = params;
    const index = posts
      .findIndex((post) => 
        post.code === postId
      );
    const postComments = comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo 
          post={this.props.posts[index]}
          comments={comments} 
          increment={increment}
          index={index} />
        <Comments 
          addComment={addComment} 
          removeComment={removeComment}
          postComments={postComments} 
          postId={postId} />
      </div>
    );
  }
};

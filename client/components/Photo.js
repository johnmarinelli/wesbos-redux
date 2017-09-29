import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = ({
  post,
  comments,
  increment,
  index
}) => {
  return (

    <figure className="grid-figure">
      <div className="grid-photo-wrap">
        <Link to={`/view/${post.code}`}>
          <img src={post.display_src} alt={post.caption} className="grid-photo" />
        </Link>

        <CSSTransitionGroup transitionName="like"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500} >
          <span key={post.likes} className="likes-heart">{post.likes}</span>
        </CSSTransitionGroup>

        <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button onClick={increment.bind(null, index)} className="likes">&hearts; {post.likes}</button>
            <Link className="button" to={`/view/${post.code}`}>
              <span className="comment-count">
                <span className="speech-bubble"></span>
                <span>{comments[post.code] ? comments[post.code].length : 0}</span>
              </span>
            </Link>
          </div>
        </figcaption>

      </div>
    </figure>
  );
};

export default Photo;

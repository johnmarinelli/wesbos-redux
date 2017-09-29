import React, { Component } from 'react';
import { Link } from 'react-router';

import Photo from './Photo';

export default class PhotoGrid extends Component {
  render () {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, index) => 
          <Photo 
            index={index} 
            key={index} 
            increment={this.props.increment}
            comments={this.props.comments} 
            post={post} />)}
      </div>
    );
  }
};

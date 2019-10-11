import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('/api/posts').then(response => {
      this.setState({
        posts: response.data
      });
    }).catch(errors => {
      console.log(errors);
    })
  }

  render() {
    return (
      <div className="container">
        {this.state.posts.map(post => 

        <li key={post.id}>
          <Link to={"/posts/" + post.id}>{post.name}</Link>
        </li>

        )}
      </div>
    );
  }
}

export default Post;

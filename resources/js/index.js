import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Post from './components/Post';
import Example from './components/Example';
import PostArticle from './components/PostArticle';

export default class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Link to ="/">Home</Link>
            <Link to ="/posts">Blog</Link>
            <Route path="/" exact component={Example} />
            <Route path="/posts" exact component={Post} />
            <Route path="/posts/:id" exact render={props => <PostArticle{...props} /> }/>
          </div>
        </Router>
      </div>
    );
  }
}

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}

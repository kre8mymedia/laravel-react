import React, { Component } from "react";
import axios from "axios";

export default class PostArticle extends Component {
  
  render() {
    return (
      <h1>{this.props.children.name}</h1>
      <p>{this.props.children.body}</p>
    );
  }
}

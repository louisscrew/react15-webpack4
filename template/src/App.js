import React, { Component } from 'react';
import CInput from "@/components/CInput";
import CList from "@/components/CList";

import './app.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      comments: []
    }
  }
  handleSubmitComment(comment) {
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
  }

  render() {
    return (
      <div class="wrapper">
        <CInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CList comments={this.state.comments} />
      </div>
    );
  }
}
export default App;

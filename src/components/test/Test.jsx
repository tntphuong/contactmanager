import React, { Component } from "react";

class Test extends Component {
  state = {
    body: "",
    title: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data => this.setState({ body: data.body, title: data.title }));
  }

  render() {
    const { body, title } = this.state;

    return (
      <div>
        <h1 className="display-4">{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;

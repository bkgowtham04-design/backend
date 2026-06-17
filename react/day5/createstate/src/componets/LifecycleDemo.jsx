import React, { Component } from "react";

class LifecycleDemo extends Component {
  constructor() {
    super();
    console.log("Constructor Called");
  }

  componentDidMount() {
    console.log("Mounted");
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  componentWillUnmount() {
    console.log("Unmounted");
  }

  render() {
    console.log("Render Called");
    return <h1>Lifecycle Example</h1>;
  }
}

export default LifecycleDemo;
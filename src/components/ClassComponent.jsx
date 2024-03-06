import React, { Component } from "react";

export class ClassComponent extends Component {
  constructor() {
    super();
    this.state = { backgroundColor: "olive" };
  }

  changeBg = () => {
    // this.state = { backgroundColor: "purple" }; // Taip nedaryti
    this.setState({ backgroundColor: "red" });
  };
  //   showProps = () => {
  //     console.log(this.props);
  //   };

  render() {
    return (
      <div>
        ClassComponent
        <button
          onClick={this.changeBg}
          style={{ backgroundColor: this.state.backgroundColor }}
        >
          Click
        </button>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default ClassComponent;

import React, { Component } from "react";

export class BasicClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.color);
  }

  showProps() {
    console.log(this.props);
  }

  render() {
    return (
      <div
        style={{
          color: this.props.color,
          backgroundColor: this.props.backgroundColor,
        }}
      >
        Labas is klasinio komponento
        {/* {this.props.numberArray?.map((el, i) => (
          <p key={i}>{el}</p>
        ))} */}
      </div>
    );
  }
}

export default BasicClassComponent;

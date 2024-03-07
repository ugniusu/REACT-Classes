import React, { Component } from "react";
import { random } from "../functions/random";

export class GenerateSquares extends Component {
  constructor() {
    super();
    this.state = {
      squares: [],
    };
  }

  createSquare = () => {
    const copy = [...this.state.squares];
    copy.push(random(1, 10));
    this.setState({ squares: copy });
    console.log(copy);
  };

  render() {
    return (
      <div>
        <button onClick={this.createSquare}>Click</button>
        <div style={{ display: "flex" }}>
          {this.state.squares.map((square, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "aqua",
                width: "50px",
                height: "50px",
                margin: "5px",
              }}
            >
              {square}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default GenerateSquares;

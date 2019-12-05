import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    imageUrl: "http://picsum.photos/250",
    arraySamp: ["one", "two", "three"]
  };

  style = {
    fontSize: 16,
    fontWeight: "bold"
  };

  clickFunction = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
  formatUrl() {
    const { imageUrl } = this.state;
    return imageUrl;
  }
  conditionCheck() {
    if (this.state.arraySamp.length === 0) {
      return <p>Onnum Illa boss uh!</p>;
    } else {
      return (
        <ul>
          {this.state.arraySamp.map(arrayS => (
            <li key={arrayS}>{arrayS}</li>
          ))}
        </ul>
      );
    }
  }
  render() {
    return (
      <React.Fragment>
        <span style={this.style} className={this.getClassess()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.clickFunction}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.conditionCheck()}
      </React.Fragment>
    );
  }

  getClassess() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;

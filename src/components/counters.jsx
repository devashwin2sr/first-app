import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 4
      },
      { id: 2, value: 5 }
    ]
  };

  handleDelete = id => {
    const change = this.state.counters.filter(c => c.id != id);
    this.setState({ counters: change });
  };

  handleReset = a => {
    console.log(a);
  };

  render() {
    return (
      <React.Fragment>
        <button
          style={{ display: "block" }}
          onClick={() => this.handleReset("reset")}
          className="btn btn-primary mx-2 btn-sm"
        >
          Reset
        </button>
        {this.state.counters.map(count => (
          <Counter
            key={count.id}
            counters={count}
            onDelete={this.handleDelete}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;

import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("CounterSS");
    const { onClear, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button onClick={onClear} className="btn btn-primary btn-sm m-2">
          Clear
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onToDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          >
            {/* <h4>Counter #{counter.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;

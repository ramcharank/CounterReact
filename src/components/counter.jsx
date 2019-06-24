import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProp, prevState) {
    console.log("prevProp", prevProp);
    console.log("PreState", prevState);
  }

  componentWillUnmount() {
    console.log("UnMount");
  }
  render() {
    console.log("counter only");
    console.log("props", this.props);
    return (
      <div>
        <h3> {this.props.counter.name}</h3>
        <img src={this.props.counter.source} height="100" width="100" />
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onToDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          -
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? 0 : count;
  }
}

export default Counter;

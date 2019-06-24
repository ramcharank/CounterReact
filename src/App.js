import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 0,
        name: "banana",
        source:
          "https://target.scene7.com/is/image/Target/GUEST_f5d0cfc3-9d02-4ee0-a6c6-ed5dc09971d1?wid=488&hei=488&fmt=pjpeg"
      },
      {
        id: 2,
        value: 0,
        name: "apple",
        source:
          "https://static.agcanada.com/wp-content/uploads/sites/5/2018/11/apple_GettyImages186843005_cmyk.jpg"
      },
      {
        id: 3,
        value: 0,
        name: "strawberry",
        source:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg"
      },
      {
        id: 4,
        value: 0,
        name: "mango",
        source:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeAPaU1hxi6eKlirfouJ42u0h7XSJShX7jwPG_v2quRRC_Y8YVUg"
      }
    ]
  };

  constructor() {
    super();
    console.log("App - constructor");
    // this.state = this.props.
  }

  componentDidMount() {
    console.log("App Mounted");
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleClear = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    console.log("rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onClear={this.handleClear}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

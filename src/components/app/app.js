import React, { Component } from "react";
import ItemStatusFilter from "../item-status-filter";
import List from "../list";

import "./app.css";

export default class App extends Component {
  maxId = 10;
  state = {
    someData: [
      this.createItem("Drink Coffee", true, true),
      this.createItem("Create React App"),
      this.createItem("Study Bible", false, true),
      this.createItem("Read book of Hemingway")
    ],
    filter: "all"
  };
  createItem(label, done = false, important = false) {
    return {
      label,
      done,
      important,
      id: this.maxId++
    };
  }
  makeFilter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter(elem => !elem.done);
      case "done":
        return items.filter(elem => elem.done);
      default:
        return items;
    }
  }
  makeFilterChange = filter => {
    this.setState({ filter });
  };
  render() {
    const { someData } = this.state;

    return (
      <div className="app">
        <h1>Filter of elements</h1>
        <div className="top-panel">
          <ItemStatusFilter
            currentFilter={filter}
            onFilterChange={this.makeFilterChange}
          />
        </div>
        <List someProps={someData} onDeleted={this.makeDelete} />
      </div>
    );
  }
}

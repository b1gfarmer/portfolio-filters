import React, { Component } from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";
import data from "../data";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "All",
      projects: data
    };

    this.filters = ["All", "Websites", "Flayers", "Business Cards"];
  }

  handleSelectFilter = (filter) => {
    this.setState({
      selected: filter
    });
  };

  render() {
    const { selected } = this.state;

    const filteredProjects =
      selected === "All"
        ? this.state.projects
        : this.state.projects.filter(p => p.category === selected);

    return (
      <div>
        <Toolbar
          filters={this.filters}
          selected={selected}
          onSelectFilter={this.handleSelectFilter}
        />

        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}

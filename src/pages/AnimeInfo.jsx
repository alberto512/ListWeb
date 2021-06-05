import React, { Component } from "react";
import AnimeInfoComponent from "../components/AnimeInfoComponent/AnimeInfoComponent";
import NavBarGroup from "../components/NavBar/NavBarGroup";

class AnimeInfo extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarGroup />
        <AnimeInfoComponent anime={this.props.match} />
      </React.Fragment>
    );
  }
}

export default AnimeInfo;
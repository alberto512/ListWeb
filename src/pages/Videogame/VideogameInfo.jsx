import React, { Component } from "react";
import VideogameInfoComponent from "../../components/Videogame/InfoComponent/VideogameInfoComponent";
import NavBarGroup from "../../components/NavBar/NavBarGroup";

class VideogameInfo extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarGroup />
        <VideogameInfoComponent videogame={this.props.match} />
      </React.Fragment>
    );
  }
}

export default VideogameInfo;
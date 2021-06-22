import React, { Component } from "react";
import VideogameFormEdit from "../../components/Videogame/Forms/VideogameFormEdit";
import NavBarGroup from "../../components/NavBar/NavBarGroup";

class VideogameInfoEdit extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarGroup />
        <VideogameFormEdit videogame={this.props.match} />
      </React.Fragment>
    );
  }
}

export default VideogameInfoEdit;
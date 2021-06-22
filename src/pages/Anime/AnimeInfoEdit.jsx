import React, { Component } from "react";
import AnimeFormEdit from "../../components/Anime/Forms/AnimeFormEdit";
import NavBarGroup from "../../components/NavBar/NavBarGroup";

class AnimeInfoEdit extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarGroup />
        <AnimeFormEdit anime={this.props.match} />
      </React.Fragment>
    );
  }
}

export default AnimeInfoEdit;
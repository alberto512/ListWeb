import React, { Component } from "react";
import MangaInfoComponent from "../../components/Manga/InfoComponent/MangaInfoComponent";
import NavBarGroup from "../../components/NavBar/NavBarGroup";

class MangaInfo extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarGroup />
        <MangaInfoComponent manga={this.props.match} />
      </React.Fragment>
    );
  }
}

export default MangaInfo;
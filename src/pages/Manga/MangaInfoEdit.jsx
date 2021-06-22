import React, { Component } from "react";
import MangaFormEdit from "../../components/Manga/Forms/MangaFormEdit";
import NavBarGroup from "../../components/NavBar/NavBarGroup";

class MangaInfoEdit extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarGroup />
        <MangaFormEdit manga={this.props.match} />
      </React.Fragment>
    );
  }
}

export default MangaInfoEdit;
import React, { Component } from "react";
import MovieFormEdit from "../../components/Movie/Forms/MovieFormEdit";
import NavBarGroup from "../../components/NavBar/NavBarGroup";

class MovieInfoEdit extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarGroup />
        <MovieFormEdit movie={this.props.match} />
      </React.Fragment>
    );
  }
}

export default MovieInfoEdit;
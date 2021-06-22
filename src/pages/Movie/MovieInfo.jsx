import React, { Component } from "react";
import MovieInfoComponent from "../../components/Movie/InfoComponent/MovieInfoComponent";
import NavBarGroup from "../../components/NavBar/NavBarGroup";

class MovieInfo extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarGroup />
        <MovieInfoComponent movie={this.props.match} />
      </React.Fragment>
    );
  }
}

export default MovieInfo;
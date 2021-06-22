import React, { Component } from "react";
import SeriesInfoComponent from "../../components/Series/InfoComponent/SeriesInfoComponent";
import NavBarGroup from "../../components/NavBar/NavBarGroup";

class SeriesInfo extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarGroup />
        <SeriesInfoComponent series={this.props.match} />
      </React.Fragment>
    );
  }
}

export default SeriesInfo;
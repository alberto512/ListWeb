import React, { Component } from "react";
import SeriesFormEdit from "../../components/Series/Forms/SeriesFormEdit";
import NavBarGroup from "../../components/NavBar/NavBarGroup";

class SeriesInfoEdit extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarGroup />
        <SeriesFormEdit series={this.props.match} />
      </React.Fragment>
    );
  }
}

export default SeriesInfoEdit;
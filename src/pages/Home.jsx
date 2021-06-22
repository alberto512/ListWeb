import React, { Component } from "react";
import NavBarGroup from "../components/NavBar/NavBarGroup";
import "./Home.css";

class Home extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#D2A5FF";
  }

  render() {
    return (
      <React.Fragment>
        <NavBarGroup />
          <div className="title">
            <h1 className="lists-title">Lists Web</h1>
          </div>
      </React.Fragment>
    );
  }
};

export default Home;
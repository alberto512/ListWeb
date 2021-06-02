import React from "react";
import NavBarGroup from "../components/NavBar/NavBarGroup";
import "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <NavBarGroup />
        <div className="title">
          <h1 className="lists">Lists Web</h1>
        </div>
    </React.Fragment>
  );
};

export default Home;
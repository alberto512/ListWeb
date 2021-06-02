import React, { Component } from "react";
import NavBarGroup from "../components/NavBar/NavBarGroup";
import SearchBar from "../components/SearchBar/SearchBar";
import ItemDeck from "../components/ItemDeck/ItemDeck";
import "./AnimePage.css";

class AnimePage extends Component {
  state = {
    value: "",
  };

  handleValue = (val) => {
    this.setState({ value: val });
  };

  render() {
    return(
      <React.Fragment>
          <NavBarGroup />
          <SearchBar value={this.handleValue} />
          <div className="item-deck">
            <ItemDeck value={this.state.value} url="anime" />
          </div>
        </React.Fragment>
    );
  }
};

export default AnimePage;
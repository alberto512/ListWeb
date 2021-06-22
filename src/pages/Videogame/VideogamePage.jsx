import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import NavBarGroup from "../../components/NavBar/NavBarGroup";
import SearchBar from "../../components/SearchBar/SearchBar";
import ItemDeck from "../../components/ItemDeck/ItemDeck";
import "./VideogamePage.css";

class VideogamePage extends Component {
  state = {
    value: "",
  };

  componentDidMount() {
    document.body.style.backgroundColor = "#FFF97D";
  }

  handleValue = (val) => {
    this.setState({ value: val });
  };

  render() {
    return(
      <React.Fragment>
          <NavBarGroup />
          <div className="search-videogame">
            <SearchBar value={this.handleValue} />
          </div>
          <div className="item-deck-videogame">
            <ItemDeck value={this.state.value} url="videogame"/>
          </div>
          <Button className="button-videogame">
            <NavLink exact className="button-videogame-link" to="/ListsWeb/videogame/add">
              Add
            </NavLink>
          </Button>
        </React.Fragment>
    );
  }
};

export default VideogamePage;
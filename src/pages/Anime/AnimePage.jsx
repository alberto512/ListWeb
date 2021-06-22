import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import NavBarGroup from "../../components/NavBar/NavBarGroup";
import SearchBar from "../../components/SearchBar/SearchBar";
import ItemDeck from "../../components/ItemDeck/ItemDeck";
import "./AnimePage.css";

class AnimePage extends Component {
  state = {
    value: "",
  };

  componentDidMount() {
    document.body.style.backgroundColor = "#1A43A9";
  }

  handleValue = (val) => {
    this.setState({ value: val });
  };

  render() {
    return(
      <React.Fragment>
          <NavBarGroup />
          <div className="search-anime">
            <SearchBar value={this.handleValue} />
          </div>
          <div className="item-deck-anime">
            <ItemDeck value={this.state.value} url="anime"/>
          </div>
          <Button className="button-anime">
            <NavLink exact className="button-anime-link" to="/ListsWeb/anime/add">
              Add
            </NavLink>
          </Button>
        </React.Fragment>
    );
  }
};

export default AnimePage;
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import NavBarGroup from "../../components/NavBar/NavBarGroup";
import SearchBar from "../../components/SearchBar/SearchBar";
import ItemDeck from "../../components/ItemDeck/ItemDeck";
import "./MangaPage.css";

class MangaPage extends Component {
  state = {
    value: "",
  };

  componentDidMount() {
    document.body.style.backgroundColor = "#2BDDB9";
  }

  handleValue = (val) => {
    this.setState({ value: val });
  };

  render() {
    return(
      <React.Fragment>
          <NavBarGroup />
          <div className="search-manga">
            <SearchBar value={this.handleValue} />
          </div>
          <div className="item-deck-manga">
            <ItemDeck value={this.state.value} url="manga"/>
          </div>
          <Button className="button-manga">
            <NavLink exact className="button-manga-link" to="/ListsWeb/manga/add">
              Add
            </NavLink>
          </Button>
        </React.Fragment>
    );
  }
};

export default MangaPage;
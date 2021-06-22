import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import NavBarGroup from "../../components/NavBar/NavBarGroup";
import SearchBar from "../../components/SearchBar/SearchBar";
import ItemDeck from "../../components/ItemDeck/ItemDeck";
import "./SeriesPage.css";

class SeriesPage extends Component {
  state = {
    value: "",
  };

  componentDidMount() {
    document.body.style.backgroundColor = "#D90C0C";
  }

  handleValue = (val) => {
    this.setState({ value: val });
  };

  render() {
    return(
      <React.Fragment>
          <NavBarGroup />
          <div className="search-series">
            <SearchBar value={this.handleValue} />
          </div>
          <div className="item-deck-series">
            <ItemDeck value={this.state.value} url="series"/>
          </div>
          <Button className="button-series">
            <NavLink exact className="button-series-link" to="/ListsWeb/series/add">
              Add
            </NavLink>
          </Button>
        </React.Fragment>
    );
  }
};

export default SeriesPage;
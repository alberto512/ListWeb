import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import NavBarGroup from "../../components/NavBar/NavBarGroup";
import SearchBar from "../../components/SearchBar/SearchBar";
import ItemDeck from "../../components/ItemDeck/ItemDeck";
import "./MoviePage.css";

class MoviePage extends Component {
  state = {
    value: "",
  };

  componentDidMount() {
    document.body.style.backgroundColor = "#008E18";
  }

  handleValue = (val) => {
    this.setState({ value: val });
  };

  render() {
    return(
      <React.Fragment>
          <NavBarGroup />
          <div className="search-movie">
            <SearchBar value={this.handleValue} />
          </div>
          <div className="item-deck-movie">
            <ItemDeck value={this.state.value} url="movie"/>
          </div>
          <Button className="button-movie">
            <NavLink exact className="button-movie-link" to="/ListsWeb/movie/add">
              Add
            </NavLink>
          </Button>
        </React.Fragment>
    );
  }
};

export default MoviePage;
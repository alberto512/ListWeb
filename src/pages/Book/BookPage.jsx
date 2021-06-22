import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import NavBarGroup from "../../components/NavBar/NavBarGroup";
import SearchBar from "../../components/SearchBar/SearchBar";
import ItemDeck from "../../components/ItemDeck/ItemDeck";
import "./BookPage.css";

class BookPage extends Component {
  state = {
    value: "",
  };

  componentDidMount() {
    document.body.style.backgroundColor = "#784500";
  }

  handleValue = (val) => {
    this.setState({ value: val });
  };

  render() {
    return(
      <React.Fragment>
          <NavBarGroup />
          <div className="search-book">
            <SearchBar value={this.handleValue} />
          </div>
          <div className="item-deck-book">
            <ItemDeck value={this.state.value} url="book"/>
          </div>
          <Button className="button-book">
            <NavLink exact className="button-book-link" to="/ListsWeb/book/add">
              Add
            </NavLink>
          </Button>
        </React.Fragment>
    );
  }
};

export default BookPage;
import React, { Component } from "react";
import BookInfoComponent from "../../components/Book/InfoComponent/BookInfoComponent";
import NavBarGroup from "../../components/NavBar/NavBarGroup";

class BookInfo extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarGroup />
        <BookInfoComponent book={this.props.match} />
      </React.Fragment>
    );
  }
}

export default BookInfo;
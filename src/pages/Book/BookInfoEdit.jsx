import React, { Component } from "react";
import BookFormEdit from "../../components/Book/Forms/BookFormEdit";
import NavBarGroup from "../../components/NavBar/NavBarGroup";

class BookInfoEdit extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarGroup />
        <BookFormEdit book={this.props.match} />
      </React.Fragment>
    );
  }
}

export default BookInfoEdit;
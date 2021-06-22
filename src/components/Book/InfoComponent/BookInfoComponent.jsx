import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from 'react-bootstrap/Button'
import "./BookInfoComponent.css";

const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    if (userToken) {
      return userToken
    } else {
      return undefined
    }
};

class BookInfoComponent extends Component {
  state = {
    book: [],
  };

  async getData() {
    let data = await axios
      .get(
        "https://lists-backend-web.herokuapp.com/api/book/" +
          this.props.book.params.id, {
            headers: {
                "Authorization": "Token " + getToken()
            }
          }
      )
      .then(function (response) {
        return response.data;
      });

    this.setState({ book: data });
  }

  handleDelete = (e) => {
    axios.delete("https://lists-backend-web.herokuapp.com/api/book/" + this.state.book.id + "/", {
        headers: {
          "Authorization": "Token " + getToken()
        }
      }
    ).then(
      function () {
        window.location.href = "https://alberto512.github.io/ListsWeb/book/"
      }
    )
  };

  componentDidMount() {
    document.body.style.backgroundColor = "#784500"
    this.getData();
  }

  render() {
    let path = "/ListsWeb/book/info/edit/" +  this.state.book.id;
    return (
      <React.Fragment>
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Paper className="display-item-book-paper">TITLE<br />{this.state.book.title}</Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className="display-item-book-paper">SAGA<br />{this.state.book.saga}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-book-paper">NEXT BOOK<br />{this.state.book.next_book}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-book-paper">VOLUME<br />{this.state.book.chapters}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-book-paper">STATUS<br />{this.state.book.status}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-book-paper">PERSONAL STATUS<br />{this.state.book.personal_status}</Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className="display-item-book-paper">ADDITIONAL COMMENTS<br />{this.state.book.additional_comments}</Paper>
            </Grid>
            <Grid item xs={6}>
              <NavLink exact activeClassName="current" to={path}>
                <Button className="button-edit">Edit</Button>
              </NavLink>
            </Grid>
            <Grid item xs={6}>
                <Button className="button-delete" onClick={this.handleDelete}>Delete</Button>
            </Grid>
      </Grid>

      </React.Fragment>
    );
  }
}

export default BookInfoComponent;
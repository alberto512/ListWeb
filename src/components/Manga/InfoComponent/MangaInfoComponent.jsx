import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from 'react-bootstrap/Button'
import "./MangaInfoComponent.css";

const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    if (userToken) {
      return userToken
    } else {
      return undefined
    }
};

class MangaInfoComponent extends Component {
  state = {
    manga: [],
  };

  async getData() {
    let data = await axios
      .get(
        "https://lists-backend-web.herokuapp.com/api/manga/" +
          this.props.manga.params.id, {
            headers: {
                "Authorization": "Token " + getToken()
            }
          }
      )
      .then(function (response) {
        return response.data;
      });

    this.setState({ manga: data });
  }

  handleDelete = (e) => {
    axios.delete("https://lists-backend-web.herokuapp.com/api/manga/" + this.state.manga.id + "/", {
        headers: {
          "Authorization": "Token " + getToken()
        }
      }
    ).then(
      function () {
        window.location.href = "https://alberto512.github.io/ListsWeb/manga/"
      }
    )
  };

  componentDidMount() {
    document.body.style.backgroundColor = "#2BDDB9"
    this.getData();
  }

  render() {
    let path = "/ListsWeb/manga/info/edit/" +  this.state.manga.id;
    return (
      <React.Fragment>
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Paper className="display-item-manga-paper">TITLE<br />{this.state.manga.title}</Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className="display-item-manga-paper">TYPE<br />{this.state.manga.type}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-manga-paper">SAGA<br />{this.state.manga.saga}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-manga-paper">CHAPTERS<br />{this.state.manga.chapters}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-manga-paper">STATUS<br />{this.state.manga.status}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-manga-paper">PERSONAL STATUS<br />{this.state.manga.personal_status}</Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className="display-item-manga-paper">ADDITIONAL COMMENTS<br />{this.state.manga.additional_comments}</Paper>
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

export default MangaInfoComponent;
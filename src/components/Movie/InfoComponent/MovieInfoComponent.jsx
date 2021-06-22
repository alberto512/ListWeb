import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from 'react-bootstrap/Button'
import "./MovieInfoComponent.css";

const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    if (userToken) {
      return userToken
    } else {
      return undefined
    }
};

class MovieInfoComponent extends Component {
  state = {
    movie: [],
  };

  async getData() {
    let data = await axios
      .get(
        "https://lists-backend-web.herokuapp.com/api/movie/" +
          this.props.movie.params.id, {
            headers: {
                "Authorization": "Token " + getToken()
            }
          }
      )
      .then(function (response) {
        return response.data;
      });

    this.setState({ movie: data });
  }

  handleDelete = (e) => {
    axios.delete("https://lists-backend-web.herokuapp.com/api/movie/" + this.state.movie.id + "/", {
        headers: {
          "Authorization": "Token " + getToken()
        }
      }
    ).then(
      function () {
        window.location.href = "https://alberto512.github.io/ListsWeb/movie/"
      }
    )
  };

  componentDidMount() {
    document.body.style.backgroundColor = "#008E18"
    this.getData();
  }

  render() {
    let path = "/ListsWeb/movie/info/edit/" +  this.state.movie.id;
    return (
      <React.Fragment>
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Paper className="display-item-movie-paper">TITLE<br />{this.state.movie.title}</Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className="display-item-movie-paper">SAGA<br />{this.state.movie.saga}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-movie-paper">NEXT MOVIE<br />{this.state.movie.next_movie}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-movie-paper">INSTALLMENT<br />{this.state.movie.chapters}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-movie-paper">STATUS<br />{this.state.movie.status}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-movie-paper">PERSONAL STATUS<br />{this.state.movie.personal_status}</Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className="display-item-movie-paper">PLATFORM<br />{this.state.movie.platform}</Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className="display-item-movie-paper">ADDITIONAL COMMENTS<br />{this.state.movie.additional_comments}</Paper>
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

export default MovieInfoComponent;
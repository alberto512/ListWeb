import React, { Component } from "react";
import axios from "axios";
import "./AnimeInfoComponent.css";
import Button from 'react-bootstrap/Button'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    if (userToken) {
      return userToken
    } else {
      return undefined
    }
};

class AnimeInfoComponent extends Component {
  state = {
    anime: [],
  };

  async getData() {
    let data = await axios
      .get(
        "http://127.0.0.1:8000/api/anime/" +
          this.props.anime.params.id, {
            headers: {
                "Authorization": "Token " + getToken()
            }
          }
      )
      .then(function (response) {
        return response.data;
      });

    this.setState({ anime: data });
  }

  handleDelete = (e) => {
    axios.delete("http://localhost:8000/api/anime/" + this.state.anime.id + "/", {
        headers: {
          "Authorization": "Token " + getToken()
        }
      }
    ).then(
      function () {
        window.location.href = "https://alberto512.github.io/ListsWeb/anime/"
      }
    )
  };

  componentDidMount() {
    document.body.style.backgroundColor = "#1A43A9"
    this.getData();
  }

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Paper className="display-item-paper">TITLE<br />{this.state.anime.title}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-paper">TYPE<br />{this.state.anime.type}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-paper">SEASONS<br />{this.state.anime.seasons}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-paper">STATUS<br />{this.state.anime.status}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-paper">PERSONAL STATUS<br />{this.state.anime.personal_status}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-paper">PLATFORM<br />{this.state.anime.platform}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-paper">NEXT SEASON<br />{this.state.anime.next_season}</Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className="display-item-paper">ADDITIONAL COMMENTS<br />{this.state.anime.additional_comments}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Button className="button-edit">Edit</Button>
            </Grid>
            <Grid item xs={6}>
                <Button className="button-delete" onClick={this.handleDelete}>Delete</Button>
            </Grid>
      </Grid>

      </React.Fragment>
    );
  }
}

export default AnimeInfoComponent;
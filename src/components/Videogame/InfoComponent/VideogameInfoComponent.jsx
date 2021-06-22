import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from 'react-bootstrap/Button'
import "./VideogameInfoComponent.css";

const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    if (userToken) {
      return userToken
    } else {
      return undefined
    }
};

class VideogameInfoComponent extends Component {
  state = {
    videogame: [],
  };

  async getData() {
    let data = await axios
      .get(
        "https://lists-backend-web.herokuapp.com/api/videogame/" +
          this.props.videogame.params.id, {
            headers: {
                "Authorization": "Token " + getToken()
            }
          }
      )
      .then(function (response) {
        return response.data;
      });

    this.setState({ videogame: data });
  }

  handleDelete = (e) => {
    axios.delete("https://lists-backend-web.herokuapp.com/api/videogame/" + this.state.videogame.id + "/", {
        headers: {
          "Authorization": "Token " + getToken()
        }
      }
    ).then(
      function () {
        window.location.href = "https://alberto512.github.io/ListsWeb/videogame/"
      }
    )
  };

  componentDidMount() {
    document.body.style.backgroundColor = "#FFF97D"
    this.getData();
  }

  render() {
    let path = "/ListsWeb/videogame/info/edit/" +  this.state.videogame.id;
    return (
      <React.Fragment>
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Paper className="display-item-videogame-paper">TITLE<br />{this.state.videogame.title}</Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className="display-item-videogame-paper">FRANCHISE<br />{this.state.videogame.saga}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-videogame-paper">NEXT VIDEOGAME<br />{this.state.videogame.next_videogame}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-videogame-paper">INSTALLMENT<br />{this.state.videogame.chapters}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-videogame-paper">STATUS<br />{this.state.videogame.status}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-videogame-paper">PERSONAL STATUS<br />{this.state.videogame.personal_status}</Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className="display-item-videogame-paper">PLATFORM<br />{this.state.videogame.platform}</Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className="display-item-videogame-paper">ADDITIONAL COMMENTS<br />{this.state.videogame.additional_comments}</Paper>
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

export default VideogameInfoComponent;
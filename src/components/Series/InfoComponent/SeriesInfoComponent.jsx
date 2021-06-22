import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./SeriesInfoComponent.css";

const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    if (userToken) {
      return userToken
    } else {
      return undefined
    }
};

class SeriesInfoComponent extends Component {
  state = {
    series: [],
  };

  async getData() {
    let data = await axios
      .get(
        "https://lists-backend-web.herokuapp.com/api/series/" +
          this.props.series.params.id, {
            headers: {
                "Authorization": "Token " + getToken()
            }
          }
      )
      .then(function (response) {
        return response.data;
      });

    this.setState({ series: data });
  }

  handleDelete = (e) => {
    axios.delete("https://lists-backend-web.herokuapp.com/api/series/" + this.state.series.id + "/", {
        headers: {
          "Authorization": "Token " + getToken()
        }
      }
    ).then(
      function () {
        window.location.href = "https://alberto512.github.io/ListsWeb/series/"
      }
    )
  };

  componentDidMount() {
    document.body.style.backgroundColor = "#D90C0C"
    this.getData();
  }

  render() {
    let path = "/ListsWeb/series/info/edit/" +  this.state.series.id;
    return (
      <React.Fragment>
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Paper className="display-item-series-paper">TITLE<br />{this.state.series.title}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-series-paper">TYPE<br />{this.state.series.type}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-series-paper">SEASONS<br />{this.state.series.seasons}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-series-paper">STATUS<br />{this.state.series.status}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-series-paper">PERSONAL STATUS<br />{this.state.series.personal_status}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-series-paper">PLATFORM<br />{this.state.series.platform}</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="display-item-series-paper">NEXT SEASON<br />{this.state.series.next_season}</Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className="display-item-series-paper">ADDITIONAL COMMENTS<br />{this.state.series.additional_comments}</Paper>
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

export default SeriesInfoComponent;
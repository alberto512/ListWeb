import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.value(document.getElementById("input-bar").value);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-search">
          <form autoComplete="off">
            <div className="tb">
              <div className="td">
                <input
                  id="input-bar"
                  className="input-bar"
                  type="text"
                  placeholder="Search"
                  required
                />
              </div>
              <div className="td" id="cover">
                <button
                  className="button-bar"
                  type="submit"
                  onClick={this.handleClick}
                >
                  <div className="circle"></div>
                  <span className="button-span"></span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;

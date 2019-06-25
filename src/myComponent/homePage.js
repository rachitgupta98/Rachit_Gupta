import React, { Component, Fragment } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import profile from "../images/profile.jpg";
import Fab from "@material-ui/core/Fab";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ width: "100%", margin: "auto" }} className="home-page">
          <Grid container>
            <Grid item xs={12}>
              <div>
                <img src={profile} className="profile-img" />
              </div>
              <h1 className="name-css">
                Rachit <span className="surname">Gupta</span>
              </h1>
              <p className="sub-detail">Artist and Developer</p>
              <br />
              <br />

              <div className="sub-detail">
                <p>Follow Me</p>
              </div>
              <p className="sub-detail2">
                <a href="https://github.com/rachitgupta98">
                  <i class="fab fa-github " />
                </a>
                <a href="https://www.instagram.com/_rachit_gupta/">
                  <i class="fab fa-instagram " />
                </a>
                <a href="https://www.facebook.com/gr8.rachit">
                  <i class="fab fa-facebook-f" />
                </a>
                <a href="https://www.linkedin.com/in/rachit-gupta-906645147/">
                  <i class="fab fa-linkedin" />
                </a>
              </p>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;

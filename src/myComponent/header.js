import React, { Component, Fragment } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
//import HomePage from "./homePage";
const styles = theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  drawerWidth: {
    width: "auto"
  },
  drawerColor: {
    textAlign: "center"
  },
  headerwidth: {
    width: "100",
    padding: 0,
    margin: 0,
    float: "left"
  }
});

class Header extends Component {
  state = {
    open: false
  };
  handleMenubutton = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <AppBar
          className="header-color"
          position="static"
          classes={{ positionStatic: classes.headerwidth }}
        >
          <Toolbar>
            <Typography variant="title" color="inherit" style={{ flexGrow: 1 }}>
              Resume
            </Typography>
            <Hidden mdUp>
              <IconButton color="inherit" onClick={this.handleMenubutton}>
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              <Button
                href="#about"
                color="inherit"
                style={{ fontSize: "1rem" }}
              >
                About
              </Button>
              <Button
                href="#experience"
                color="inherit"
                style={{ fontSize: "1rem" }}
              >
                Experience
              </Button>
              <Button
                href="#education"
                color="inherit"
                style={{ fontSize: "1rem" }}
              >
                Education
              </Button>
              <Button
                href="#skills & interest"
                color="inherit"
                style={{ fontSize: "1rem" }}
              >
                Skills
              </Button>

              <Button
                href="#achievements"
                color="inherit"
                style={{ fontSize: "1rem" }}
              >
                Achievements
              </Button>
            </Hidden>
          </Toolbar>
        </AppBar>

        <Hidden mdUp>
          <Drawer
            variant="persistent"
            anchor="top"
            open={this.state.open}
            classes={{ paperAnchorTop: classes.drawerColor }}
          >
            <div className={classes.drawerWidth}>
              <IconButton onClick={this.handleMenubutton}>
                <KeyboardArrowUpIcon />
              </IconButton>

              <List>
                {[
                  "about",
                  "experience",
                  "education",
                  "skills & interest",

                  "achievements"
                ].map((text, index) => (
                  <ListItem button key={index}>
                    <Button href={`#${text}`} onClick={this.handleMenubutton}>
                      <ListItemText primary={text} />
                    </Button>
                  </ListItem>
                ))}
              </List>
            </div>
          </Drawer>
        </Hidden>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Header);

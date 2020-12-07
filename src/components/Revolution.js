import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import vision from "../assets/vision.svg";
import technologyAnimation from "../animations/technologyAnimation/data.json";

import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  paragraphContainer: {
    maxWidth: "30em",
  },
}));

export default function Websites(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoPlay: true,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography variant="h2" style={{ fontFamily: "Pacifico" }}>
          The Revolution
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item lg>
          <img
            src={vision}
            alt="mountain through binoculars"
            style={{ maxWidth: "40em", marginRight: "5em" }}
          />
        </Grid>
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography align="right" variant="h4" gutterBottom>
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="right" variant="body1" paragraph>
              Body body body
            </Typography>
            <Typography align="right" variant="body1" paragraph>
              Body body body
            </Typography>
            <Typography align="right" variant="body1" paragraph>
              Body body body
            </Typography>
            <Typography align="right" variant="body1" paragraph>
              Body body body
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Technology
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Body body body
            </Typography>
            <Typography variant="body1" paragraph>
              Body body body
            </Typography>
            <Typography variant="body1" paragraph>
              Body body body
            </Typography>
            <Typography variant="body1" paragraph>
              Body body body
            </Typography>
            <Typography variant="body1" paragraph>
              Body body body
            </Typography>
            <Typography variant="body1" paragraph>
              Body body body
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justify="flex-end" lg>
          <Lottie
            options={defaultOptions}
            isStopped={true}
            style={{ maxWidth: "40em", margin: 0 }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

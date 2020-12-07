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
import consultation from "../assets/consultationIcon.svg";
import mockup from "../assets/mockupIcon.svg";
import review from "../assets/reviewIcon.svg";
import design from "../assets/designIcon.svg";
import build from "../assets/buildIcon.svg";
import launch from "../assets/launchIcon.svg";
import maintain from "../assets/maintainIcon.svg";
import iterate from "../assets/iterateIcon.svg";
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
      <Grid
        item
        container
        direction="row"
        justify="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Process
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ backgroundColor: "#b3b3b3", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Consultation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body Body body body
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={consultation} alt="handshake" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ backgroundColor: "#ff7373", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Mockup
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body Body body body
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={mockup} alt="basic website design outline" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ backgroundColor: "#39b54a", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body Body body body
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={review} alt="magnifying glass" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ backgroundColor: "#a67c52", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body Body body body
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={design} alt="paintbrush leaving stroke of paint" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ backgroundColor: "#39b54a", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body Body body body
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={review} alt="magnifying glass" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ backgroundColor: "#fbb03b", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Build
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body Body body body
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body
            </Typography>{" "}
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body
            </Typography>{" "}
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={build} alt="building construction site" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ backgroundColor: "#c1272d", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Launch
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body Body body body
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={launch} alt="rocket" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ backgroundColor: "#8b45ce", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Maintain
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body Body body body
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={maintain} alt="wretch tightening bolts" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ backgroundColor: "#29abe2", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Iterate
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body Body body body
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Body body body
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={iterate} alt="falling dominoes" />
        </Grid>
      </Grid>
    </Grid>
  );
}

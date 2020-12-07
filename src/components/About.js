import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import history from "../assets/history.svg";

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
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.4,
  },
}));

export default function Websites(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography variant="h2">About Us</Typography>
      </Grid>
      <Grid item container justify="center" className={classes.rowContainer}>
        <Typography
          variant="h4"
          align="center"
          className={classes.missionStatement}
        >
          missionStatement missionStatement missionStatement missionStatement
          missionStatement missionStatement missionStatement missionStatement
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        justify="space-around"
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth: "35em" }}
          >
            <Grid item>
              <Typography variant="h4" gutterBottom>
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraphContainer
                style={{ fontWeight: 700, fontStyle: "italic" }}
              >
                We're the new kid on the block
              </Typography>
              <Typography variant="body1" paragraph>
                We're the new kid on the block We're the new kid on the block
                We're the new kid on the block
              </Typography>
              <Typography variant="body1" paragraph>
                We're the new kid on the block We're the new kid on the block
                We're the new kid on the block
              </Typography>

              <Typography variant="body1" paragraph>
                We're the new kid on the block We're the new kid on the block
                We're the new kid on the block
              </Typography>

              <Typography variant="body1" paragraph>
                We're the new kid on the block We're the new kid on the block
                We're the new kid on the block
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justify="center" lg>
            <img
              src={history}
              alt="quill pen sitting on top of book"
              style={{ maxHeight: "22em" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

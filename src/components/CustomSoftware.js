import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";

const useStyles = makeStyles((theme) => ({}));

export default function CustomSoftware(props) {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item container direction="row">
        <Grid item>
          <IconButton>
            <img src={backArrow} alt="Back to Services Page" />
          </IconButton>
        </Grid>
        <Grid item container direction="column">
          <Grid item>
            <Typography variant="h2">Custom Software Development</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Text 1
            </Typography>
            <Typography variant="body1" paragraph>
              Text 2
            </Typography>
            <Typography variant="body1" paragraph>
              Text 3
            </Typography>
            <Typography variant="body1" paragraph>
              Text 4
            </Typography>
          </Grid>
          <Grid item>
            <IconButton>
              <img
                src={forwardArrow}
                alt="Forward to iOS/Android App Development"
              />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

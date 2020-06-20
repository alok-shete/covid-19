import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

import CountUp from "react-countup";
import "./Card.css";

const card = (props) => {
  return (
    <div>
      <Grid item component={Card} xs={10} md={10} className={props.styles}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            <b>{props.name}</b>
          </Typography>
          <Typography variant="H5">
            <CountUp
              start={0}
              end={props.count}
              duration={(1, 2)}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(props.date).toDateString()}
          </Typography>
          <Typography variant="body2">{props.desc}</Typography>
        </CardContent>
      </Grid>
    </div>
  );
};

export default card;

import React from 'react';
import { ToggleSlider }  from "react-toggle-slider";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 428,
    height: 70,
    background: '#1a1919'
  },
  title: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    display:'flex',
    padding: 6,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});

export default function GeneralFeatureCard({featureName}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {featureName} <ToggleSlider />
        </Typography>
      </CardContent>
    </Card>
  );
}

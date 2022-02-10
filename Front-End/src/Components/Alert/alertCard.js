import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AlertFeatureCard from './alertfeatureCard';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
  root: {
    background: '#000000'
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
  cards: {
    padding: 2, 
    margin: 6
  },
});

export default function AlertCard({alertFeatures}) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          ALERTS
        </Typography>
        <Grid container spacing={1}>
        {alertFeatures.map((data) => (
            <div className={classes.cards}>
             <Grid item md={4}>
             <AlertFeatureCard featureName={data.alerts_feature_name}/>
            </Grid>
            </div>  
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
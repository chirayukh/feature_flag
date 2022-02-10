import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GeneralFeatureCard from './generalfeatureCard';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
  root: {
    marginTop: 15,
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

export default function GeneralCard({generalFeatures}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          GENERAL
        </Typography>
        <Grid container spacing={2}>
        {generalFeatures.map((data) => (
            <div className={classes.cards}>
             <Grid item md={4}>
             <GeneralFeatureCard featureName={data.general_feature_name}/>
            </Grid>
            </div>  
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
import {React,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ToggleSlider }  from "react-toggle-slider";
import SettingFeatureCard from './settingfeatureCard';
import SimpleSelect from '../Dropdown/dropdown';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
  cardroot: {
    width: 475,
    background: '#1a1919'
  },
  cardtitle: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    display:'flex',
    padding: 6,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  accordianroot: {
    width: 475,
    background: '#1a1919'
  },
  accordiantitle: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    display:'flex',
    padding: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight:'auto',
    marginBottom: 8
  },
  togglenicon: {
    display:'flex',
    alignItems: 'center',

  },
});

export default function SettingCard({settingFeatures}) {
  const classes = useStyles();
  const [showCards, setshowCards] = useState(false);
  const [rotateChevron, setRotateChevron] = useState(false);
  const [toggleActive, settoggleActive] = useState();

  const handleToggle = () => {
    setRotateChevron(!rotateChevron);
    setshowCards(!showCards);
    settoggleActive(!toggleActive)
  }

const rotate = rotateChevron ? "rotate(180deg)" : "rotate(0)"

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          SETTINGS
        </Typography>
        <Grid container spacing={1}>
            <div className={classes.cards}>
             <Grid item md={12}>
             <SettingFeatureCard featureName={"AUDIT LOG"}/>
            </Grid>
            </div>  
          <div className={classes.cards}>
             <Grid item md={12}>
             <Card className={classes.cardroot}>
      <CardContent>
        <Typography className={classes.accordiantitle}>USERS 
        <div className={classes.togglenicon}>
        <ToggleSlider onToggle={handleToggle} /> <ExpandMoreIcon style={{ transform: rotate, transition: "all 0.2s linear" }}/>
        </div>
        </Typography> 
        {showCards === true ?
        <Grid container spacing={1}>   
        <Grid item md={12}>
        <Card className={classes.root}>
            <CardContent>
                    <Typography className={classes.cardtitle} gutterBottom>
                     USERS ADD <ToggleSlider />
                    </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item md={12}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.cardtitle} gutterBottom>
                     USER DELETE <ToggleSlider />
                    </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item md={12}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.cardtitle} gutterBottom>
                     USERS EDIT <ToggleSlider />
                    </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item md={12}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.cardtitle} gutterBottom>
                     MAX USERS  <SimpleSelect/> <ToggleSlider />
                    </Typography>
                    
                </CardContent>
            </Card>
            </Grid>
        </Grid> : ""}
      </CardContent>
    </Card> 
            </Grid>
            </div>
        </Grid>
      </CardContent>
    </Card>
  );
}
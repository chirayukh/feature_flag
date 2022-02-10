import './App.css';
import GeneralCard from './Components/General/generalCard';
import SettingCard from './Components/Settings/settingCard';
import AlertCard from './Components/Alert/alertCard';
import LinearIndeterminate from './Components/Loader/LinearLoader'
import Grid from '@material-ui/core/Grid';
import {React,useState,useEffect} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import axios from "axios";

function App() {
const [message, setMessage] = useState("");
const [openfailure, setOpenFailure] = useState(false);
const [isToggle, setisToggle] = useState(false);
const [generalFeatureList, setgeneralFeatureList] = useState([]);
const [settingsFeatureList, setsettingsFeatureList] = useState([]);
const [alertsFeatureList, setalertsFeatureList] = useState([]);

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setOpenFailure(false);
}

useEffect(() => {

  const fetchGeneralFeatures = () => {
    setisToggle(true);
    axios.get('http://localhost:5000/api/generalfeature', {

    })
    .then((response) => {
      setgeneralFeatureList(response.data);
      setisToggle(false);
    })
    .catch((error) => {
      setisToggle(false);
      setOpenFailure(true);
      setMessage("Error occured while retrieving the general features. Please Try Again Later.");

    });
}

fetchGeneralFeatures()
}, [])

useEffect(() => {
const fetchSettingsFeatures = () => {
  setisToggle(true);
  axios.get('http://localhost:5000/api/settingfeature', {

  })
  .then((response) => {
    setsettingsFeatureList(response.data);
    setisToggle(false);
  })
  .catch((error) => {
    setisToggle(false);
    setOpenFailure(true);
    setMessage("Error occured while retrieving the settings features. Please Try Again Later.");

  });
}

fetchSettingsFeatures()
}, [])

useEffect(() => {
const fetchAlertsFeatures = () => {
  setisToggle(true);
  axios.get('http://localhost:5000/api/alertfeature', {

  })
  .then((response) => {
    setalertsFeatureList(response.data);
    setisToggle(false);
  })
  .catch((error) => {
    setisToggle(false);
    setOpenFailure(true);
    setMessage("Error occured while retrieving the alerts features. Please Try Again Later.");

  });
}

fetchAlertsFeatures()
}, [])

  return (
    <div>
      {isToggle && <div style={{ position: 'absolute', zIndex: 110, top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center',background: 'rgba(255,255,255,1)' }}>
          <LinearIndeterminate />
        </div>}
        <Snackbar open={openfailure} anchorOrigin={{vertical: 'bottom', horizontal: 'center'
      }} onClose={handleClose}>
        <Alert onClose={handleClose} variant="filled" severity="error" style={{'font-size': '1.15rem'}}>
        {message}
        </Alert>
      </Snackbar>
      <Grid container spacing={1}>
      <Grid item md={12}>
      <GeneralCard generalFeatures= {generalFeatureList}/>
      </Grid>
      <Grid item md={6}>
      <SettingCard settingFeatures = {settingsFeatureList}/>
      </Grid>
      <Grid item md={6}>
      <AlertCard alertFeatures = {alertsFeatureList}/>
      </Grid>
      </Grid>
    </div>
  );
}

export default App;

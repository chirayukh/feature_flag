const express = require('express');
const cors = require('cors');
const app = express();

// DATABASE
const pool = require('./dbConnection');

app.use(cors());
app.use(express.json())



app.get ('/api/generalfeature', async (req,res) => {

    try {
        const allGeneralFeatureList = await pool.query(
            "select general_feature_name from general_feature;"
        )
        res.json(allGeneralFeatureList.rows);
    } 
    catch (error) {
      console.error(error.message)  
    }

});

app.get ('/api/settingfeature', async (req,res) => {

    try {
        const allSettingFeatureList = await pool.query(
            "select settings_feature_name from settings_feature;"
        )
        res.json(allSettingFeatureList.rows);
    } 
    catch (error) {
      console.error(error.message)  
    }

});

app.get ('/api/alertfeature', async (req,res) => {

    try {
        const allAlertFeatureList = await pool.query(
            "select alerts_feature_name from alerts_feature;"
        )
        res.json(allAlertFeatureList.rows);
    } 
    catch (error) {
      console.error(error.message)  
    }

});



const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Listening to port..${port}`)); 
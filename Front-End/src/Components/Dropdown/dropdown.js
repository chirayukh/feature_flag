import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    background: '#222020',
  },
  select: {
    color: 'white'
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [users, setusers] = React.useState('');

  const handleChange = (event) => {
    setusers(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          className={classes.select}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={users}
          onChange={handleChange}
        >
          <MenuItem value={0} default>0</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
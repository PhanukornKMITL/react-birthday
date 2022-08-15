import React, { useState, useEffect } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import BirthDayCard from './BirthDayCard';

const DashBoard = () => {
  const [birthdayList, setbirthdayList] = useState([
    { name: 'banmk' },
    { name: 'jest' },
  ]);

  const clearList = () => {
    setbirthdayList([]);
  };

  useEffect(() => {}, []);

  const getBirthDayList = () => {
    return (
      <div>
        {birthdayList?.map((birthday) => (
          <div>
            <BirthDayCard value={birthday}> </BirthDayCard>
          </div>
        ))}
      </div>
    );
  };

  return (
    <List
      className="dashboard"
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <div className="title">
          <ListSubheader component="div" id="nested-list-subheader">
            {birthdayList?.length} birthdays today
          </ListSubheader>

          <Button className=""> + </Button>
        </div>
      }
    >
      {getBirthDayList()}

      <Button
        variant="contained"
        className="clearButton"
        disableElevation
        onClick={clearList}
      >
        Clear All
      </Button>
    </List>
  );
};

export default DashBoard;

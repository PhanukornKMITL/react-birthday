import React from 'react';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work';

const BirthDayCard = (birthday) => {
  const { name } = birthday.value;
  console.log(name);

  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary="Jan 7, 2014" />
      </ListItem>
    </div>
  );
};

export default BirthDayCard;

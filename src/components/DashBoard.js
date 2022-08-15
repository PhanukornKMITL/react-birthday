import React, { useState } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const DashBoard = () => {
  const [birthdayCount, setBirthdayCount] = useState(0);

  const clearList = () => {
    console.log('cloar');
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
            {birthdayCount} birthdays today
          </ListSubheader>

          <Button className=""> + </Button>
        </div>
      }
    >
      <Button variant="contained" className="clearButton" disableElevation>
        Clear All
      </Button>
    </List>
  );
};

export default DashBoard;

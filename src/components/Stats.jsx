import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ListSubheader from '@mui/material/ListSubheader';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
export default function Stats(props) {
  return (
    <List
      sx={{
        ml: 10,
        width: '150%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
      aria-labelledby="nested-list-subheader"

      subheader={
        <ListSubheader align="left" component="div" id="nested-list-subheader">
          {props.gender ? "Gender Count" : "Status Count"}
        </ListSubheader>
      }

    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PeopleAltIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.all} secondary="All" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FemaleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.all - props.one} secondary={props.gender ? "Female" : "Inactive"} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MaleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.one} secondary={props.gender ? "Male" : "Active"} />
      </ListItem>
    </List>
  );
}
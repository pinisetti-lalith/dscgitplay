import React from 'react';
import Typography from "@material-ui/core/Typography";
import {
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { deepPurple} from '@material-ui/core/colors';
import users from "./users";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },

  orange: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

const UserItem = ()=>{
const classes = useStyles();
    return (
      <List className={classes.root}>
        {users.map((user) => (
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.orange}>
                <ArrowForwardIosIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={user} />
          </ListItem>
        ))}
      </List>
    );

}
export default UserItem;
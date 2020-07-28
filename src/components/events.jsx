import React from 'react'
import '../App.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DataModal from './modal' 
const useStyles = makeStyles({
    root: {
      minWidth: 375,
      marginTop: "25%",
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between'
    }
  });

const Events = props => {
    const classes = useStyles();
    return (
        <div className="events">
            <h1 className="logo">Life yoga</h1>
            <h2>Ashtanga Yoga Live Session</h2>
            <div>
            <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                Yoga Event
                </Typography>
                <Typography variant="h5" component="h1">
                {props.title}
                </Typography>
                <Typography variant="body2" component="p">
                {props.time}
                </Typography>
            </CardContent>
            <CardActions className={classes.actions}>
                <Button size="small">{props.price}</Button>
                <DataModal />
            </CardActions>
            </Card>
            
            </div>
        </div>
    )
}

export default Events

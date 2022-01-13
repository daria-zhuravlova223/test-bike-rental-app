import React from "react";
import useStyles from './styles';
import { Button, Typography, Paper } from '@material-ui/core';
import { mergeClasses } from "@material-ui/styles";
import { useDispatch } from "react-redux";
import { updateBikeStatus, deleteBike } from "../../actions/bikes";


const Bike = ({bike}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
        return (
        <Paper className={`${mergeClasses.paper} ${classes.form} ${classes.root}`}>
            <Typography className={classes.bikeName}  variant="h6">{bike.name} / {bike.type} / ${bike.price}</Typography>
            {bike.status === 'available' && 
            <>
                <Button className={classes.button} color="primary" variant="contained" onClick={()=>{
                    bike.status = 'rented';
                    dispatch(updateBikeStatus(bike._id, bike));
                    }}>Rent</Button>
                <Button className={classes.button} color="secondary" variant="contained" onClick={()=>{dispatch(deleteBike(bike._id))}}>Delete</Button>
                </>}
            {bike.status === 'rented' && <Button className={classes.button} color="secondary" variant="contained" onClick={()=>{
                    bike.status = 'available';
                    dispatch(updateBikeStatus(bike._id, bike));
                    }}>Cancel rent</Button>}
        </Paper>
    );
}

export default Bike;